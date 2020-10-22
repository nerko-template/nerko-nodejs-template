module.exports = {
  moduleDirectories: [
    "node_modules"
  ],
  modulePaths: [
    "<rootDir>"
  ],
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js"
  ],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.less?$": "babel-jest"
  },
  testRegex: "/test/.*.(jsx?|tsx?)$",
  modulePathIgnorePatterns: ["test/mock/"],
  unmockedModulePathPatterns: [
    "react",
    "enzyme",
    "jest-enzyme"
  ],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
    "axios": "<rootDir>/__mocks__/axios.ts",
  }
}
