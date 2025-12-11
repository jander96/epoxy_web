// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  vite: {
    envPrefix: ['SUPABASE_'], // Permite usar SUPABASE_URL y SUPABASE_ANON_KEY
  },
});