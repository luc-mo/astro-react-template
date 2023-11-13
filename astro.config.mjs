import { defineConfig } from 'astro/config';
import unocss from '@unocss/astro'
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [
    unocss({ injectReset: true }),
    react(),
  ]
});