// Simple build script for Vercel deployment
// This script can inject environment variables into config.js during build

const fs = require('fs');
const path = require('path');

// Environment variables to inject
const SUPABASE_URL = process.env.SUPABASE_URL || 'https://ygrcjsqsknogyezwoest.supabase.co';
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlncmNqc3Fza25vZ3llendvZXN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYzMjYxNzIsImV4cCI6MjA3MTkwMjE3Mn0.JsPXvsHk8eYpS2-0izq9-sBjOCCTfUKE6tHiIF9EJP0';

// Generate production config.js
const configContent = `// Auto-generated config for production deployment
const config = {
    SUPABASE_URL: '${SUPABASE_URL}',
    SUPABASE_ANON_KEY: '${SUPABASE_ANON_KEY}',
    
    init: function() {
        return this;
    }
};

window.appConfig = config.init();
`;

// Write the config file
fs.writeFileSync(path.join(__dirname, 'config.js'), configContent);

console.log('✅ Config.js updated with environment variables');
console.log('📍 SUPABASE_URL:', SUPABASE_URL);
console.log('📍 SUPABASE_ANON_KEY:', SUPABASE_ANON_KEY.substring(0, 20) + '...');