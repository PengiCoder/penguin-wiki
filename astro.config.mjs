import { defineConfig } from 'astro/config';

import vue from "@astrojs/vue";

import cloudflare from "@astrojs/cloudflare";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://pengi.au',
  integrations: [vue(), sitemap()],
  adapter: cloudflare()
});