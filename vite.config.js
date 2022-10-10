import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    base: './',
    assetsDir: './',
    outDir: 'docs',
    rollupOptions: {
      // https://rollupjs.org/guide/en/#big-list-of-options
    },
  },
});
