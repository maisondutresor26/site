import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: "https://www.maisondutresormarrakech.com",
  output: "server",

  integrations: [tailwind(), react(), sitemap()],

  adapter: cloudflare(),
});
