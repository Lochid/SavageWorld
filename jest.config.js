module.exports = {
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json',
      diagnostics: false
    }
  },
  'moduleFileExtensions': [
    'ts',
    'tsx',
    'js'
  ],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  testURL: 'http://localhost',
  testEnvironment: 'node',
  collectCoverageFrom: [
    'src/**/*.{js,ts,tsx}',
    '!src/**/*.d.{ts,tsx}'
  ],
  coveragePathIgnorePatterns: [
  ],
  coverageReporters: [
    'html',
    'text',
    'text-summary'
  ],
};
