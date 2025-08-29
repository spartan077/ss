# Vercel Deployment Guide

This guide will help you deploy the Ora User Dashboard to Vercel.

## Prerequisites

- [ ] GitHub account
- [ ] Vercel account (free at [vercel.com](https://vercel.com))
- [ ] Supabase account with a project set up

## Quick Deploy

### Method 1: Direct GitHub Integration (Recommended)

1. **Push to GitHub:**
   ```bash
   # Create a new repository on GitHub first
   git remote add origin https://github.com/YOUR_USERNAME/ora-user-dashboard.git
   git branch -M main
   git push -u origin main
   ```

2. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect it's a static site
   - Set environment variables (see below)
   - Deploy!

### Method 2: Manual Upload

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel --prod
   ```

## Environment Variables Setup

### Option 1: Via Vercel Dashboard
1. Go to your project settings in Vercel
2. Navigate to "Environment Variables"
3. Add:
   - `SUPABASE_URL`: Your Supabase project URL
   - `SUPABASE_ANON_KEY`: Your Supabase anon key

### Option 2: Via CLI
```bash
vercel env add SUPABASE_URL
vercel env add SUPABASE_ANON_KEY
```

### Option 3: Use config.js (Simplest)
Just edit the `config.js` file with your Supabase credentials and push to GitHub.

## Supabase Configuration

1. **Get your credentials:**
   - Go to [supabase.com](https://supabase.com)
   - Navigate to your project
   - Go to Settings → API
   - Copy:
     - **Project URL** for `SUPABASE_URL`
     - **anon public** key for `SUPABASE_ANON_KEY`

2. **Update config.js:**
   ```javascript
   const config = {
     SUPABASE_URL: 'your_actual_supabase_url',
     SUPABASE_ANON_KEY: 'your_actual_supabase_anon_key',
     // ... rest of config
   };
   ```

## Database Setup

Make sure your Supabase project has these tables:

### Required Tables:
- `user_profiles` (id, full_name, api_credits, etc.)
- `subscription_plans` (id, name, description, current_price, original_price, credits_included, is_active, is_popular, payment_link)
- `payment_confirmations` (id, user_id, plan_id, plan_name, amount_paid, credits_to_add, user_email, created_at)

### SQL Schema Example:
```sql
-- User profiles table
CREATE TABLE user_profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id),
  full_name TEXT,
  api_credits INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Subscription plans table
CREATE TABLE subscription_plans (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT,
  current_price INTEGER NOT NULL,
  original_price INTEGER,
  credits_included INTEGER NOT NULL,
  is_active BOOLEAN DEFAULT true,
  is_popular BOOLEAN DEFAULT false,
  payment_link TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Payment confirmations table
CREATE TABLE payment_confirmations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id),
  plan_id UUID REFERENCES subscription_plans(id),
  plan_name TEXT NOT NULL,
  amount_paid INTEGER NOT NULL,
  credits_to_add INTEGER NOT NULL,
  user_email TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE subscription_plans ENABLE ROW LEVEL SECURITY;
ALTER TABLE payment_confirmations ENABLE ROW LEVEL SECURITY;
```

## Troubleshooting

### Common Issues:

1. **"Supabase credentials not found"**
   - Check that `config.js` has the correct credentials
   - Verify environment variables are set in Vercel

2. **CORS errors**
   - Ensure your Supabase project has the Vercel domain in allowed origins
   - Check in Supabase Settings → Authentication → URL Configuration

3. **Database connection errors**
   - Verify database tables exist
   - Check Row Level Security policies

## Custom Domain (Optional)

After deployment, you can add a custom domain:
1. Go to your Vercel project settings
2. Navigate to "Domains"
3. Add your custom domain
4. Follow the DNS setup instructions

## Monitoring

- Vercel automatically provides analytics
- Check Supabase dashboard for database metrics
- Monitor usage in your Vercel dashboard