// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  clearMocks: true,
  coverageDirectory: "coverage",
  collectCoverageFrom: [
    "**/*.{ts,tsx}",
    "!<rootDir>/src/pages/{_app,_document,_error}.{ts,tsx}",
    "!<rootDir>/next-env.d.ts",
    "!<rootDir>/serviceWorker.js",
    "!<rootDir>/node_modules/",
  ],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: {
    "^@pages/(.*)": "<rootDir>/src/pages/$1",
    "^@components/(.*)": "<rootDir>/src/components/$1",
    "^@containers/(.*)": "<rootDir>/src/containers/$1",
    "^@libs/(.*)": "<rootDir>/src/libs/$1",
  },
};
