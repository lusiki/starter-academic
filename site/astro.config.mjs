import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.lukasikic.info',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
});
