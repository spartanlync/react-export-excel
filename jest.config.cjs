module.exports = {
    name: 'react-data-export-jest',
    verbose: true,
    collectCoverage: true,
    coveragePathIgnorePatterns: [
        'node_modules',
    ],
    testEnvironment: 'jsdom',
    testRegex: '(/test/unit.*\\.test)\\.js',
    setupFiles: [
        './test/setup.js'  // Use the mock setup file
    ],
    modulePathIgnorePatterns: [
        'global.js'
    ],
    testPathIgnorePatterns: [
        '__snapshots__'
    ]
};
