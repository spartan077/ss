// Build script for Vercel deployment
// Creates public directory with all static files for deployment

const fs = require('fs');
const path = require('path');

// Environment variables to inject
const SUPABASE_URL = process.env.SUPABASE_URL || 'https://ygrcjsqsknogyezwoest.supabase.co';
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlncmNqc3Fza25vZ3llendvZXN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYzMjYxNzIsImV4cCI6MjA3MTkwMjE3Mn0.JsPXvsHk8eYpS2-0izq9-sBjOCCTfUKE6tHiIF9EJP0';

// Create public directory
const publicDir = path.join(__dirname, 'public');
if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
}

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

// Write the config file to public directory
fs.writeFileSync(path.join(publicDir, 'config.js'), configContent);

// Copy index.html to public directory
const indexPath = path.join(__dirname, 'index.html');
const publicIndexPath = path.join(publicDir, 'index.html');
if (fs.existsSync(indexPath)) {
    fs.copyFileSync(indexPath, publicIndexPath);
}

// Copy other static files to public directory
const filesToCopy = ['.env', '.gitignore', 'README.md', 'DEPLOYMENT.md', 'vercel.json', 'package.json'];
filesToCopy.forEach(file => {
    const srcPath = path.join(__dirname, file);
    const destPath = path.join(publicDir, file);
    if (fs.existsSync(srcPath)) {
        fs.copyFileSync(srcPath, destPath);
    }
});

console.log('✅ Build completed successfully!');
console.log('📁 Public directory created with all static files');
console.log('📍 SUPABASE_URL:', SUPABASE_URL);
console.log('📍 SUPABASE_ANON_KEY:', SUPABASE_ANON_KEY.substring(0, 20) + '...');