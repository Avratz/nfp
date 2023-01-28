const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/src/$1',
  },

  testEnvironment: 'jest-environment-jsdom',
  collectCoverage: true,
  collectCoverageFrom: ['./src/**/*.{ts,tsx}'],
  coverageThreshold: {
    global: {
      lines: 70,
    },
  },
}

module.exports = createJestConfig(customJestConfig)
