module.exports = {
  preset: '@stencil/core/testing',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  transform: {
    '^.+\\.(js)$': '@stencil/core/testing/jest-preprocessor',
  },
  transformIgnorePatterns: ['/node_modules/.pnpm/@ecl+media-container@5.0.0-alpha.22/node_modules/@ecl/media-container/media-container.js'],
};
