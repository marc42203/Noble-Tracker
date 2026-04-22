import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  base: '/Noble-Tracker/',
  publicDir: 'public',
  build: {
    outDir: 'dist',
  },
  server: {
    port: 3000,
    open: '/index.html',
    headers: {
      'Cross-Origin-Opener-Policy': 'same-origin-allow-popups'
    }
  }
});
