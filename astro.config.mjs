// @ts-check
import { defineConfig } from 'astro/config';
import sanity from '@sanity/astro';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [
    sanity({
      projectId: 'your-project-id',
      dataset: 'production',
      useCdn: false,
      studioBasePath: '/studio'
    })
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});