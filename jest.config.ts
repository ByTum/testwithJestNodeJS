import type { Config } from '@jest/types';

const baseDir = '<rootDir>/src/app/pass_checker';
const baseTestDir = '<rootDir>/src/test/pass_checker';

const config: Config.InitialOptions = {
  preset: 'ts-jest', // for jest understand typescript
  testEnvironment: 'node',
  verbose: true, // show more info in the console
  collectCoverage: true,
  // collectCoverageFrom: ['<rootDir>/src/app/**/*.ts'], // all file in the root directory .ts
  collectCoverageFrom: [`${baseDir}/**/*.ts`],
  testMatch: [`${baseTestDir}/**/*.ts`],
};

export default config;
