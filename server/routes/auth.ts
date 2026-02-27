import { Router, Request, Response } from "express";
import { query } from "../db";
import {
  hashPassword,
  verifyPassword,
  generateToken,
  verifyToken,
  extractDeviceInfo,
} from "../auth";

const router = Router();

// Middleware to get user from token
export function authMiddleware(req: Request, res: Response, next: Function) {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "No token provided" });
  }

  const decoded = verifyToken(token);
  if (!decoded) {
    return res.status(401).json({ error: "Invalid token" });
  }

  (req as any).user = decoded;
  next();
}

// Sign Up
router.post("/signup", async (req: Request, res: Response) => {
  try {
    const { email, password, name, phone, address, company } = req.body;

    // Validate required fields
    if (!email || !password || !name) {
      return res
        .status(400)
        .json({ error: "Email, password, and name are required" });
    }

    // Check if user already exists
    const userExists = await query("SELECT id FROM users WHERE email = $1", [
      email,
    ]);
    if (userExists.rows.length > 0) {
      return res.status(409).json({ error: "Email already registered" });
    }

    // Hash password
    const hashedPassword = await hashPassword(password);

    // Create user
    const result = await query(
      `INSERT INTO users (email, password, name, phone, address, company)
       VALUES ($1, $2, $3, $4, $5, $6)
       RETURNING id, email, name, phone, address, company, created_at`,
      [
        email,
        hashedPassword,
        name,
        phone || null,
        address || null,
        company || null,
      ],
    );

    const user = result.rows[0];
    const token = generateToken(user.id, user.email);

    // Record login in history
    const ipAddress =
      (req.headers["x-forwarded-for"] as string) ||
      req.socket.remoteAddress ||
      "unknown";
    const userAgent = req.headers["user-agent"] || "unknown";
    const deviceInfo = extractDeviceInfo(userAgent);

    await query(
      `INSERT INTO login_history (user_id, ip_address, user_agent, device_info)
       VALUES ($1, $2, $3, $4)`,
      [user.id, ipAddress, userAgent, JSON.stringify(deviceInfo)],
    );

    res.status(201).json({
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        phone: user.phone,
        address: user.address,
        company: user.company,
      },
      token,
    });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Sign In
router.post("/login", async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    // Find user
    const result = await query("SELECT * FROM users WHERE email = $1", [email]);
    if (result.rows.length === 0) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const user = result.rows[0];

    // Verify password
    const validPassword = await verifyPassword(password, user.password);
    if (!validPassword) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const token = generateToken(user.id, user.email);

    // Record login in history
    const ipAddress =
      (req.headers["x-forwarded-for"] as string) ||
      req.socket.remoteAddress ||
      "unknown";
    const userAgent = req.headers["user-agent"] || "unknown";
    const deviceInfo = extractDeviceInfo(userAgent);

    await query(
      `INSERT INTO login_history (user_id, ip_address, user_agent, device_info)
       VALUES ($1, $2, $3, $4)`,
      [user.id, ipAddress, userAgent, JSON.stringify(deviceInfo)],
    );

    res.json({
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        phone: user.phone,
        address: user.address,
        company: user.company,
      },
      token,
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Get Current User Profile
router.get("/profile", authMiddleware, async (req: Request, res: Response) => {
  try {
    const user = (req as any).user;
    const result = await query(
      "SELECT id, email, name, phone, address, company, created_at, updated_at FROM users WHERE id = $1",
      [user.id],
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error("Profile fetch error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Update User Profile
router.put("/profile", authMiddleware, async (req: Request, res: Response) => {
  try {
    const user = (req as any).user;
    const { name, phone, address, company } = req.body;

    const result = await query(
      `UPDATE users SET name = $1, phone = $2, address = $3, company = $4, updated_at = CURRENT_TIMESTAMP
       WHERE id = $5
       RETURNING id, email, name, phone, address, company, created_at, updated_at`,
      [name || null, phone || null, address || null, company || null, user.id],
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error("Profile update error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Get Login History
router.get(
  "/login-history",
  authMiddleware,
  async (req: Request, res: Response) => {
    try {
      const user = (req as any).user;
      const limit = parseInt((req.query.limit as string) || "10");

      const result = await query(
        `SELECT id, login_time, logout_time, ip_address, device_info
         FROM login_history
         WHERE user_id = $1
         ORDER BY login_time DESC
         LIMIT $2`,
        [user.id, limit],
      );

      res.json(result.rows);
    } catch (error) {
      console.error("Login history error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },
);

// Logout (update logout_time)
router.post("/logout", authMiddleware, async (req: Request, res: Response) => {
  try {
    const user = (req as any).user;

    // Update the most recent login record with logout time
    await query(
      `UPDATE login_history SET logout_time = CURRENT_TIMESTAMP
       WHERE user_id = $1 AND logout_time IS NULL
       ORDER BY login_time DESC
       LIMIT 1`,
      [user.id],
    );

    res.json({ message: "Logged out successfully" });
  } catch (error) {
    console.error("Logout error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
