import { defineConfig } from 'astro/config';
import vercelStatic from '@astrojs/vercel/static';

import vercel from '@astrojs/vercel';

export default defineConfig({
  output: 'static',
  adapter: vercel(),
});