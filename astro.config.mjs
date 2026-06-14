// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";
import { BASE_PATH } from './src/config';

// https://astro.build/config
export default defineConfig({
  base: BASE_PATH,
  site: "https://example.com",
  integrations: [preact()]
});