import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import node from "@astrojs/node";

import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://www.riadmaisondutresor.com",
  integrations: [tailwind(), sitemap()],
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
});
