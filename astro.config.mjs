// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';


// https://astro.build/config
export default defineConfig({
  // site: 'https://matiasdiez.github.io',
  // base: '/espejo-teatro', // Descomentar solo al hacer el build para GitHub Pages
  vite: {
    plugins: [tailwindcss()],
  }
});