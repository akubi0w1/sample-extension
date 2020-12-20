const path = require("path");
module.exports = {
  mode: "production",
  entry: {
    "popup/popup": "./src/popup/popup.js",
    "background/background": "./src/background/background.js",
    "content/content": "./src/content/content.js"
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  }, 
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
              ],
            },
          },
        ],
      },
    ],
  },
};