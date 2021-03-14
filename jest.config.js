module.exports = {
  transform: {
    "\\.(ts|js)x?$": "<rootDir>/node_modules/ts-jest",
    "^.+\\.(js)$": "<rootDir>/node_modules/babel-jest",
  },
  automock: false,
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{ts,tsx,js}"],
  coverageReporters: ["text", "text-summary"],
  coverageThreshold: {
    global: {
      branches: 60,
      functions: 60,
      lines: 75,
      statements: 75,
    },
  },
  testMatch: ["**/*.spec.(ts|tsx|js)"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/test/mocks/fileMock.ts",
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
    "typeface-roboto": "identity-obj-proxy",
    "typeface-oswald": "identity-obj-proxy",
  },
  moduleDirectories: ["node_modules", "<rootDir>"],
  modulePathIgnorePatterns: ["<rootDir>/cypress/"],
  setupFiles: ["<rootDir>/test/setup.ts", "jest-canvas-mock"],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  timers: "fake",
};
