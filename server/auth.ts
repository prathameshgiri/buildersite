import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

const JWT_SECRET =
  process.env.JWT_SECRET || "your-secret-key-change-in-production";
const SALT_ROUNDS = 10;

export async function hashPassword(password: string): Promise<string> {
  return bcryptjs.hash(password, SALT_ROUNDS);
}

export async function verifyPassword(
  password: string,
  hash: string,
): Promise<boolean> {
  return bcryptjs.compare(password, hash);
}

export function generateToken(userId: number, email: string): string {
  return jwt.sign({ id: userId, email }, JWT_SECRET, { expiresIn: "7d" });
}

export function verifyToken(
  token: string,
): { id: number; email: string } | null {
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as {
      id: number;
      email: string;
    };
    return decoded;
  } catch (error) {
    console.error("Token verification error:", error);
    return null;
  }
}

export function extractDeviceInfo(userAgent: string): Record<string, any> {
  const browserMatch = userAgent.match(
    /(?:Chrome|Safari|Firefox|Edge|Opera)\/[\d.]+/,
  );
  const osMatch = userAgent.match(
    /(?:Windows|Macintosh|Linux|Android|iOS)[\w\s;]*/,
  );

  return {
    browser: browserMatch ? browserMatch[0] : "Unknown",
    os: osMatch ? osMatch[0] : "Unknown",
    userAgent: userAgent,
  };
}
