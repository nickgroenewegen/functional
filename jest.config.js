const config = {
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
  ],
  setupFilesAfterEnv: [
    '<rootDir>/jest/setup.js',
  ],
  collectCoverage: true,
  coverageThreshold: {
    global: {
      statements: 0,
      functions: 0,
      branches: 0,
      lines: 0,
    },
  },
  coverageReporters: [
    'json',
    'html',
    'lcov',
  ],
}

module.exports = config
