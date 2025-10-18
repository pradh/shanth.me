// @ts-check

import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://shanth.me',  // important for sitemap & canonical URLs
  integrations: [sitemap(), mdx()],
  vite: { build: { sourcemap: true } }
});
