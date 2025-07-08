import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import node from "@astrojs/node";

import sitemap from "@astrojs/sitemap";

import react from "@astrojs/react";

export default defineConfig({
  site: "https://www.riadmaisondutresor.com",
  integrations: [tailwind(), sitemap(), react()],
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
});