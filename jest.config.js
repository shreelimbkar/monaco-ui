module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  modulePathIgnorePatterns: [
    "<rootDir>/packages/components/lib",
    "<rootDir>/website/.cache",
    "<rootDir>/examples",
    "<rootDir>/tooling/cra-template*",
  ],
  transform: {
    "^.+\\.(ts|tsx)?$": "ts-jest",
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$"],
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json",
    },
  },
};
