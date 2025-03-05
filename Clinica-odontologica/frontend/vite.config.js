import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()], // Plugin do React
  build: {
    outDir: 'dist', // Pasta de saída para os arquivos construídos
    rollupOptions: {
      input: {
        main: './index.html', // Especifica o arquivo de entrada HTML
      },
    },
  },
  resolve: {
    alias: {
      // Configura aliases para importações (opcional)
      '@': '/src', // Exemplo: usar '@/' para referenciar a pasta 'src'
    },
  },
  server: {
    port: 3000, // Porta do servidor de desenvolvimento
    open: true, // Abre o navegador automaticamente ao iniciar o servidor
  },
});