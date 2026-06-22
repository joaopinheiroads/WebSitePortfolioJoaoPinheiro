import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';




// https://vitejs.dev/config/
export default defineConfig({
  assetsInclude: ['**/*.png'],
  plugins: [react()],
  css: {
    postcss: './postcss.config.cjs',
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});

