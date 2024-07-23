import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest', // for jest understand typescript
  testEnvironment: 'node',
  verbose: true, // show more info in the console
};

export default config;
