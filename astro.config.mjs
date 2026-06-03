// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import icon from 'astro-icon';
import mdx from '@astrojs/mdx';

const siteUrl = process.env.SITE || 'https://thenarrativecurrent.com';

export default defineConfig({
  devToolbar: {
    enabled: false,
  },

  site: siteUrl,
  output: 'server',
  adapter: vercel(),

  vite: {
    plugins: [tailwindcss()],
    ssr: {
      noExternal: ['gsap'],
    },
  },

  integrations: [sitemap(), icon(), mdx()],
});