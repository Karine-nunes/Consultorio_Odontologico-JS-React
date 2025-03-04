import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: 'Clinica-odontologica\frontend\index.html', // Caminho para o index.html
      },
    },
  },
});