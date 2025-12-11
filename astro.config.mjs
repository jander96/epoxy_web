// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
    site: 'https://jander96.github.io',
    // base: 'epoxy_web',
    vite: {
        envPrefix: ['SUPABASE_'], // Permite usar SUPABASE_URL y SUPABASE_ANON_KEY
    },
});