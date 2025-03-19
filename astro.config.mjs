// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  i18n: {
    locales: ["es", "en", "pt", "ja"],
    defaultLocale: "en",
  },
  vite: {
    plugins: [tailwindcss()]
  },
  prefetch: {
    prefetchAll: true
  }
});