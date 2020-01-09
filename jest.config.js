module.exports = {
      globals: {
        "ts-jest": {
            tsConfig: "tsconfig.json"
        }
    },
  transform: {
    "^.+\\.(js|jsx|ts|tsx)?$": "ts-jest"
  },
  testMatch: [
    "**/test/**/*.test.(ts|tsx)"
  ],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss|png|svg|jpg|ttf|woff|woff2)$": "identity-obj-proxy"
  },
};