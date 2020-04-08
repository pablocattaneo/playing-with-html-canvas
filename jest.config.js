module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFiles: ["jest-canvas-mock"],
  testMatch: [
    "<rootDir>/tests/*.test.ts"
  ],
};