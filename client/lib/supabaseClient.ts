import { createClient, SupabaseClient } from "@supabase/supabase-js";

// Get environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Initialize Supabase client (singleton pattern)
let supabaseInstance: SupabaseClient | null = null;

/**
 * Initialize and return the Supabase client
 * Returns null if environment variables are not configured
 */
export function getSupabase(): SupabaseClient | null {
  // If already initialized, return the instance
  if (supabaseInstance) {
    return supabaseInstance;
  }

  // Check if environment variables are set
  if (!supabaseUrl || !supabaseAnonKey) {
    console.warn(
      "Supabase environment variables not set. Please configure VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY"
    );
    return null;
  }

  // Initialize the client
  try {
    supabaseInstance = createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: true,
      },
    });

    console.log("✅ Supabase client initialized successfully");
    return supabaseInstance;
  } catch (error) {
    console.error("❌ Failed to initialize Supabase client:", error);
    return null;
  }
}

/**
 * Check if Supabase is configured
 */
export function isSupabaseConfigured(): boolean {
  return !!(supabaseUrl && supabaseAnonKey);
}

/**
 * Get Supabase URL (for debugging)
 */
export function getSupabaseUrl(): string | undefined {
  return supabaseUrl;
}

// Export default instance getter
export default getSupabase;