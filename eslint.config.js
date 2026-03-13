// eslint.config.js
import { defineConfig } from 'eslint/config';
import js from '@eslint/js';
import globals from 'globals';
import babelEslintParser from '@babel/eslint-parser';
import pluginImport from 'eslint-plugin-import';
import pluginJest from 'eslint-plugin-jest';
import prettier from 'eslint-config-prettier/flat';

export default defineConfig([
  // -----------------------
  // Global ignores
  // -----------------------
  {
    ignores: [
      '.changelog',
      '.tmp',
      '**/_imports',
      '**/build',
      '**/dist',
      '**/exports',
      '**/node_modules',
      '**/static',
      'loader',
      'src/plugins/',
      'ckeditor5',
      'playground/editor',
      'playground/ecl-webcomponents',
      'packages/ecl-webcomponents-react-consumer/src/assets/',
      'packages/ecl-webcomponents-vue-consumer/src/assets/',
      'packages/ecl-webcomponents-angular-workspace/server.js',
    ],
  },

  // -----------------------
  // JS / JSX files
  // -----------------------
  {
    files: ['**/*.js', '**/*.jsx'],
    languageOptions: {
      parser: babelEslintParser, // imported parser object
      parserOptions: {
        requireConfigFile: false,
        ecmaVersion: 2022,
        sourceType: 'module',
        babelOptions: {
          presets: ['@babel/preset-env'],
        },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
      },
    },
    plugins: {
      import: pluginImport,
      jest: pluginJest,
    },
    rules: {
      'import/no-extraneous-dependencies': 'off',
      'no-param-reassign': 'off',
      ...prettier.rules,
    },
  },

  // -----------------------
  // Script files
  // -----------------------
  {
    files: ['**/scripts/**/*.js'],
    rules: {
      'no-console': 'off',
    },
  },

  // -----------------------
  // Jest test files
  // -----------------------
  {
    files: ['**/*.test.js', '**/*.spec.js'],
    languageOptions: {
      globals: {
        ...globals.jest, // Jest globals
      },
    },
    rules: {
      'no-undef': 'off',
    },
    // NOTE: flat config does NOT support `env`, removed
  },

  // -----------------------
  // Prettier
  // -----------------------
  ...(Array.isArray(prettier) ? prettier : [prettier]), // safe spread
]);
