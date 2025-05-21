import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/new-web/',  // GitHub 仓库名
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
