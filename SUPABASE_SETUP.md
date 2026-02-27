# Supabase Authentication Setup Guide

This guide will help you set up Supabase for user authentication and data tracking.

## Step 1: Create a Supabase Project

1. Go to https://supabase.com
2. Sign up or log in with GitHub
3. Click "New Project"
4. Fill in the details:
   - **Name**: Your project name
   - **Database Password**: Create a strong password
   - **Region**: Select closest to you
5. Wait for the project to be created (2-3 minutes)

## Step 2: Get Your API Keys

1. In the Supabase dashboard, go to **Settings → API**
2. Copy these values:
   - **Project URL** (supabase_url)
   - **anon public** (anon_key)

## Step 3: Set Environment Variables

Create a `.env.local` file in your project root:

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

## Step 4: Create Database Tables

Go to **SQL Editor** in Supabase dashboard and run these queries:

### 1. Create Profiles Table

```sql
-- Create profiles table
CREATE TABLE IF NOT EXISTS profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  address VARCHAR(500),
  company VARCHAR(255),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Enable RLS
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Create RLS policy for users to read their own profile
CREATE POLICY "Users can read own profile"
  ON profiles
  FOR SELECT
  USING (auth.uid() = id);

-- Create RLS policy for users to update their own profile
CREATE POLICY "Users can update own profile"
  ON profiles
  FOR UPDATE
  USING (auth.uid() = id);

-- Create RLS policy for users to insert their own profile
CREATE POLICY "Users can insert own profile"
  ON profiles
  FOR INSERT
  WITH CHECK (auth.uid() = id);
```

### 2. Create Login History Table

```sql
-- Create login_history table
CREATE TABLE IF NOT EXISTS login_history (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  ip_address VARCHAR(45),
  device_info JSONB DEFAULT '{}',
  login_time TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  logout_time TIMESTAMP WITH TIME ZONE
);

-- Enable RLS
ALTER TABLE login_history ENABLE ROW LEVEL SECURITY;

-- Create RLS policy for users to read their own login history
CREATE POLICY "Users can read own login history"
  ON login_history
  FOR SELECT
  USING (auth.uid() = user_id);

-- Create RLS policy for users to insert their own login history
CREATE POLICY "Users can insert own login history"
  ON login_history
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Create RLS policy for users to update their own logout time
CREATE POLICY "Users can update own logout time"
  ON login_history
  FOR UPDATE
  USING (auth.uid() = user_id);
```

### 3. Create Indexes for Better Performance

```sql
-- Create indexes for faster queries
CREATE INDEX idx_login_history_user_id ON login_history(user_id);
CREATE INDEX idx_login_history_login_time ON login_history(login_time DESC);
CREATE INDEX idx_profiles_email ON profiles(email);
```

## Step 5: Enable Authentication Providers

1. Go to **Authentication → Providers**
2. Enable **Email** (should be on by default)
3. Optionally enable:
   - Google
   - GitHub
   - Discord

## Step 6: Configure Email Settings (Optional)

1. Go to **Authentication → Email Templates**
2. Customize welcome email if needed
3. Configure SMTP for production emails

## Step 7: Test the Authentication

Try signing up and logging in from the app:

1. Navigate to `/auth?mode=signup`
2. Fill in the form and sign up
3. Check Supabase dashboard → **Authentication → Users** to see your user
4. Login at `/auth?mode=login`

## API Endpoints Used

The app uses these Supabase methods:

### Authentication

- `supabase.auth.signUp()` - Register new user
- `supabase.auth.signInWithPassword()` - Login user
- `supabase.auth.signOut()` - Logout user
- `supabase.auth.getUser()` - Get current user

### Database (via Postgrest)

- `supabase.from("profiles").insert()` - Create user profile
- `supabase.from("profiles").select()` - Get profile
- `supabase.from("profiles").update()` - Update profile
- `supabase.from("login_history").insert()` - Record login
- `supabase.from("login_history").select()` - Get login history

## Database Schema

### profiles table

```
id (UUID) - User ID from auth.users
email (VARCHAR) - User email
name (VARCHAR) - User full name
phone (VARCHAR) - User phone number (optional)
address (VARCHAR) - User address (optional)
company (VARCHAR) - User company (optional)
created_at (TIMESTAMP) - Account creation time
updated_at (TIMESTAMP) - Last profile update time
```

### login_history table

```
id (UUID) - Record ID
user_id (UUID) - Reference to auth.users
ip_address (VARCHAR) - Client IP address
device_info (JSONB) - Device details (browser, OS)
login_time (TIMESTAMP) - When user logged in
logout_time (TIMESTAMP) - When user logged out (null if still logged in)
```

## Security Features

### Row Level Security (RLS)

- Users can only access their own data
- Policies enforced at database level
- Prevents unauthorized data access

### Password Security

- Passwords hashed by Supabase Auth
- Never stored in plain text
- 60+ character hashes with salt

### JWT Tokens

- Session tokens generated by Supabase
- Automatically refreshed
- Stored securely in browser

## Deployment to Netlify

1. Set environment variables in Netlify:
   - Go to **Site Settings → Build & Deploy → Environment**
   - Add:
     ```
     VITE_SUPABASE_URL=your-supabase-url
     VITE_SUPABASE_ANON_KEY=your-anon-key
     ```

2. Deploy your site
3. The frontend will connect to Supabase automatically

## Troubleshooting

### "Missing Supabase environment variables"

- Check `.env.local` has correct keys
- For Netlify, verify environment variables in dashboard

### "User already exists"

- Email is already registered
- Use a different email or check Supabase dashboard

### "Invalid login credentials"

- Check email and password are correct
- Password is case-sensitive

### "RLS policy violation"

- Ensure RLS policies are correctly set up
- Check user is authenticated
- Verify policy allows the operation

### No IP address showing

- Some networks block IP detection API
- Falls back to "unknown" - doesn't affect functionality

## Database Backups

Supabase automatically backs up your data:

- Daily backups for 7 days
- Restore from backups in dashboard if needed

## Next Steps

1. ✅ Set up Supabase project
2. ✅ Create database tables
3. ✅ Configure authentication
4. ✅ Test signup/login
5. Add password reset functionality
6. Add email verification
7. Implement OAuth (Google, GitHub)
8. Add user roles and permissions

## Support

For issues with:

- **Supabase**: https://supabase.com/docs
- **Authentication**: https://supabase.com/docs/guides/auth
- **Database**: https://supabase.com/docs/guides/database
