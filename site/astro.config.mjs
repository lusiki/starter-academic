import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://www.lukasikic.info",
  trailingSlash: "always",
  integrations: [
    sitemap({
      customPages: [
        "https://www.lukasikic.info/ai/",
        "https://www.lukasikic.info/ai/endings/audit.html",
        "https://www.lukasikic.info/ai/endings/flood.html",
        "https://www.lukasikic.info/ai/supplements/coverage.html",
        "https://www.lukasikic.info/ai/supplements/method.html",
        "https://www.lukasikic.info/ai/supplements/model.html",
        "https://www.lukasikic.info/ai/supplements/predictions.html",
        "https://www.lukasikic.info/ai/supplements/timeline.html",
      ],
    }),
  ],
  build: {
    format: "directory",
  },
});
