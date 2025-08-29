# Ora User Dashboard

A modern web dashboard for managing user subscriptions and credits with Supabase integration.

## Setup Instructions

### Environment Configuration

The application uses environment variables for Supabase configuration. There are multiple ways to configure these:

#### Method 1: Using config.js (Recommended for static hosting)
1. Open `config.js`
2. Update the `SUPABASE_URL` and `SUPABASE_ANON_KEY` values with your Supabase project details
3. No build process required - changes take effect immediately

#### Method 2: Using .env file (For build environments)
1. Copy `.env` to `.env.local` (if it doesn't exist)
2. Update the values in `.env.local`:
   ```
   SUPABASE_URL=your_supabase_project_url
   SUPABASE_ANON_KEY=your_supabase_anon_key
   ```
3. Use a build tool that supports environment variable injection

### Supabase Setup

1. Create a new Supabase project at [supabase.com](https://supabase.com)
2. Get your project URL and anon key from the Supabase dashboard
3. Update the configuration as described above

### File Structure

```
.
├── INDEX.html          # Main dashboard application
├── config.js          # Environment configuration
├── .env               # Environment variables template
└── README.md          # This documentation
```

### How to Update Environment Variables

1. **For development**: Edit `config.js` directly
2. **For production**: 
   - Create a production version of `config.js` with your production Supabase credentials
   - Or use a build tool that injects environment variables

### Security Notes

- Never commit sensitive credentials to version control
- Use different Supabase keys for different environments (development, staging, production)
- Consider using Supabase Row Level Security (RLS) for additional security

### Troubleshooting

If you see "Configuration error: Supabase credentials not found":
1. Check that `config.js` exists and is properly loaded
2. Verify that `window.appConfig.SUPABASE_URL` and `window.appConfig.SUPABASE_ANON_KEY` are defined
3. Check browser console for any JavaScript errors