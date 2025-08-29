// Configuration file for environment variables
// Vercel deployment ready - supports both static hosting and environment variables

const config = {
    // Supabase Configuration
    // For Vercel deployment, update these values or use environment variables
    SUPABASE_URL: 'https://ygrcjsqsknogyezwoest.supabase.co',
    SUPABASE_ANON_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlncmNqc3Fza25vZ3llendvZXN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYzMjYxNzIsImV4cCI6MjA3MTkwMjE3Mn0.JsPXvsHk8eYpS2-0izq9-sBjOCCTfUKE6tHiIF9EJP0',
    
    // Vercel Environment Support
    // For Vercel deployment, these will be replaced with your environment variables
    init: function() {
        // Check if we're in a Vercel environment with injected variables
        // This is a placeholder for when you want to use Vercel environment variables
        // You would typically use a build tool to inject these, but for static hosting,
        // you can manually update the values above
        
        // For production deployment with Vercel:
        // 1. Set environment variables in Vercel dashboard: SUPABASE_URL and SUPABASE_ANON_KEY
        // 2. Update the values above, or use a build process to inject them
        
        return this;
    }
};

// Initialize the config
window.appConfig = config.init();

// Production deployment tip:
// For Vercel, you can also use environment variables by:
// 1. Setting them in Vercel dashboard under Project Settings → Environment Variables
// 2. Then update this file with the actual values or use a build tool