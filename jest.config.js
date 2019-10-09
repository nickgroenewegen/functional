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
      statements: 95,
      functions: 95,
      branches: 95,
      lines: 95,
    },
  },
  coverageReporters: [
    'json',
    'html',
    'lcov',
  ],
}

module.exports = config
