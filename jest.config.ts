module.exports = {
  testMatch: ["**/*.test.tsx", "**/*.test.ts"],
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.css$": "<rootDir>/src/tests/mock-styles.css",
  },
};
