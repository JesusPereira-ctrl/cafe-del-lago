import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import svgr from 'vite-plugin-svgr';
import { componentTagger } from 'lovable-tagger';

export default defineConfig(({ mode }) => ({
  server: {
    host: '::',
    port: 8080,
  },
  plugins: [
    react(),
    svgr({
      include: '**/*.svg', // convierte SVG en componente React
      svgrOptions: { icon: true },
    }),
    mode === 'development' && componentTagger(), // solo en dev
  ].filter(Boolean),
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // para usar @ como ruta base
    },
  },
}));
