export default {

  // Automatically clear mock calls, instances, contexts and results before every test
  clearMocks: true,
  // An array of glob patterns indicating a set of files for which coverage information should be collected
  // collectCoverageFrom: undefined,

  roots: ['<rootDir>/tests'],
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  collectCoverageFrom: ['<rootDir>/src/services/*.ts'],
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
