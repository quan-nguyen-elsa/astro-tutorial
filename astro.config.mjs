// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';
import { LOCALES } from './src/constains';

// import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  // output: 'server',

  integrations: [react()],

  i18n: {
    locales: LOCALES,
    defaultLocale: 'en',
  },

  vite: {
    plugins: [tailwindcss()]
  },

  prefetch: {
    prefetchAll: true
  },

  // adapter: netlify(),

  // experimental: {
  //   session: true
  // }
});