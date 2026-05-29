import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
    build: {
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          pure_funcs: ['console.log', 'console.info'],
        },
      },
      rollupOptions: {
        output: {
          manualChunks: {
            'motion': ['motion'],
            'react': ['react', 'react-dom'],
            'vendor': ['lucide-react'],
          },
        },
      },
      cssCodeSplit: true,
      sourcemap: false,
      chunkSizeWarningLimit: 1000,
    },
  };
});
