/** @type {import('jest').Config} */
const config = {
    verbose: true,
    collectCoverage: true,
    collectCoverageFrom: [
      '<rootDir>/src/**/*.{js, jsx, ts, tsx}',
      '!**/node_modules/**',
      '!<rootDir>/src/**/*.mock.*',
    ],
    // coverageThreshold: {
    //   global: {
    //     branches: 80,
    //     functions: 80,
    //     lines: 80,
    //     statements: 80
    //   }
    // },
    testMatch: ['<rootDir>/src/**/*.test.js'],
    setupFilesAfterEnv: ['<rootDir>/src/CustomMatcher/custom-matcher.js']
  };
  
  module.exports = config;