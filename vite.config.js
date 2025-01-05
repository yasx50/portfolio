// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react(),],
  server: {
    host: '0.0.0.0',  // Bind to all network interfaces
    port: process.env.PORT || 3000, // Use the PORT environment variable or default to 3000
  },
  preview: {
    host: '0.0.0.0',
    port: process.env.PORT || 3000,
  },
});
