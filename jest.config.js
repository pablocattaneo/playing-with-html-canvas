module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFiles: ["jest-canvas-mock"],
  // testURL: "http://localhost:8080",
  testMatch: [
    "<rootDir>/tests/*.test.ts"
 ]
};