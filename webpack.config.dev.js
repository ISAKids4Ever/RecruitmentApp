module.exports = {
  test: /\.(js|jsx|mjs)$/,
  include: paths.appSrc,
  loader: require.resolve('babel-loader'),
  options: {
    plugins: [
      ["module-resolver", {
        "root": ["./"],
        "alias": {
          "components": "./src/components",
          "configs": "./src/configs",
          "routes": "./src/routes",
          "screens": "./src/screens",
          "services": "./src/services",
          "utils": "./src/utils",
          "underscore": "lodash"
        }
      }]
    ],
    cacheDirectory: true
  }
}
