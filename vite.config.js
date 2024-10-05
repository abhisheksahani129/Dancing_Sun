import { defineConfig } from 'vite';

export default defineConfig({
  base: './', // Important for GitHub Pages
  build: {
    outDir: 'dist',
  },
  server: {
    open: true, // Automatically open the app in the browser
  },
});
