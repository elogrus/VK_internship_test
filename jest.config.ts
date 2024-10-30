module.exports = {
    collectCoverage: true,
    collectCoverageFrom: ["src/**/*.test.{ts,tsx}"],
    coverageDirectory: "coverage",
    testEnvironment: "jsdom",
    transform: {
        ".(ts|tsx)": "ts-jest",
    },
    setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
    coveragePathIgnorePatterns: [],
    moduleDirectories: ["<rootDir>/src/", "<rootDir>/node_modules/"],
    moduleNameMapper: {
        "^.+\\.(css|less|scss)$": "identity-obj-proxy",
    },
    clearMocks: true,
};
