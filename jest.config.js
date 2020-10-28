module.exports = {
  coverageDirectory: 'coverage',
  coverageProvider: 'babel',
  collectCoverageFrom: ['**/src/**/*.js'],
  preset: '@shelf/jest-mongodb',
  roots: ['src', '__mocks__']
}
