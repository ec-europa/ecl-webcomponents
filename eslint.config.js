// eslint.config.js
const eslintPluginImport = require('eslint-plugin-import');
const eslintPluginJest = require('eslint-plugin-jest');
const js = require('@eslint/js');
const prettier = require('eslint-config-prettier');
const babelEslintParser = require('@babel/eslint-parser');
const globals = require('globals');

module.exports = [
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
      'packages/ecl-webcomponents-angular-workspace/server.js',
    ],
  },
  {
    ...js.configs.recommended,
    files: ['**/*.js', '**/*.jsx'],
    languageOptions: {
      parser: babelEslintParser,
      parserOptions: {
        requireConfigFile: false,
        ecmaVersion: 2022,
        sourceType: 'module',
        babelOptions: {
          presets: ['@babel/preset-env'], // Optional: Add if needed
        },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
      },
    },
    plugins: {
      import: eslintPluginImport,
      jest: eslintPluginJest,
    },
    rules: {
      'import/no-extraneous-dependencies': 'off',
      'no-param-reassign': 'off',
      ...prettier.rules,
    },
  },
  {
    files: ['**/scripts/**/*.js'],
    rules: {
      'no-console': 'off',
    },
  },
  {
    files: ['**/*.test.js', '**/*.spec.js'],
    rules: {
      'no-undef': 'off',
    },
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
    env: {
      jest: true,
    },
  },
];
