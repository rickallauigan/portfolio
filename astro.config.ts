import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://allauigan.com',
  integrations: [sitemap()],
  markdown: { shikiConfig: { theme: 'github-dark-default' } },
});
