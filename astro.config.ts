import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";
import preact from "@astrojs/preact";
import tailwindcss from "@tailwindcss/vite";
import { BASE_PATH } from "./src/config";

// https://astro.build/config
export default defineConfig({
  base: BASE_PATH,
  site: "https://example.com",
  trailingSlash: "never",
  integrations: [mdx(), preact()],
  vite: {
    plugins: [tailwindcss()],
  },
});
