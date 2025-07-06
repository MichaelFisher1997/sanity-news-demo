// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Temporarily disabled Sanity integration due to Studio rendering issues
  // Using manual studio page at /studio instead
  vite: {
    plugins: [tailwindcss()]
  }
});