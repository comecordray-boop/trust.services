import { defineConfig } from 'astro/config';

// Site vitrine bilingue (FR par défaut à la racine, EN sous /en).
// i18n géré par routing de dossiers — voir src/pages/ et src/i18n/.
export default defineConfig({
  site: 'https://trust-armored.com',
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  compressHTML: true,
});
