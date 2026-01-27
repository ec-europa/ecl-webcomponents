module.exports = {
  preset: '@stencil/core/testing',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  transform: {
    '^.+\\.(js)$': '@stencil/core/testing/jest-preprocessor',
  },
  transformIgnorePatterns: ['/node_modules/.pnpm/*/node_modules/@ecl/*/*.js'],
};
