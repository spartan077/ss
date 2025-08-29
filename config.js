// Configuration file for environment variables
// In a production environment, these values would be injected during build time
// For static hosting, you can create multiple config files for different environments

const config = {
    // Supabase Configuration
    SUPABASE_URL: 'https://ygrcjsqsknogyezwoest.supabase.co',
    SUPABASE_ANON_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlncmNqc3Fza25vZ3llendvZXN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYzMjYxNzIsImV4cCI6MjA3MTkwMjE3Mn0.JsPXvsHk8eYpS2-0izq9-sBjOCCTfUKE6tHiIF9EJP0',
    
    // Alternative: Load from .env file (requires a build process)
    // These can be replaced with your actual environment variables during build
    init: function() {
        // In a build environment, you would replace these with process.env values
        // For now, we'll use the hardcoded values but provide a structure for env vars
        
        // Example for build environments:
        // this.SUPABASE_URL = process.env.SUPABASE_URL || this.SUPABASE_URL;
        // this.SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY || this.SUPABASE_ANON_KEY;
        
        return this;
    }
};

// Initialize the config
window.appConfig = config.init();