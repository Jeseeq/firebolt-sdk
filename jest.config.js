/**
 * An object with Jest options.
 * @type {import('@jest/types').Config.InitialOptions}
 */
const options = {
  preset: "ts-jest",
  resolver: "ts-jest-resolver",
  setupFiles: ["<rootDir>/setupTests.ts"],
  watchPathIgnorePatterns: [".#"]
};

module.exports = options;
