import { defineConfig } from 'vite';

export default defineConfig(({ command }) => ({
  root: '.',
  base: command === 'build' ? '/Noble-Tracker/' : '/',
  publicDir: 'public',
  define: {
    __BASE__: JSON.stringify(command === 'build' ? '/Noble-Tracker/' : '/'),
  },
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
}));
