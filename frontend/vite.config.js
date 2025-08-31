import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    historyApiFallback: true, // ensures React Router handles all routes
  },
  resolve: {
    alias: {
      crypto: 'crypto-browserify',
    },
  },
});
