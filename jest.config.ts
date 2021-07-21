import type {Config} from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
    verbose: true,
    modulePaths: ['<rootDir>/src'],
    testPathIgnorePatterns: ['/node_modules/'],
    roots: ['<rootDir>/tests'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    }

};
export default config;
