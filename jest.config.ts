import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest', // for jest understand typescript
  testEnvironment: 'node',
  verbose: true, // show more info in the console
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/app/**/*.ts'], // all file in the root directory .ts
};

export default config;
