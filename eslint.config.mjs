import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginAstro from 'eslint-plugin-astro';
import globals from 'globals';

export default tseslint.config(
  {
    // Pre-existing static prototype files/assets predate this Astro
    // setup and are not part of the linted source tree.
    ignores: [
      'dist/**',
      '.astro/**',
      'node_modules/**',
      'assets/**',
      'assets2/**',
      'css/**',
      'undefined/**',
      '*.html',
    ],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs['flat/recommended'],
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  }
);
