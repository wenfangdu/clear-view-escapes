const path = require("path")

module.exports = {
  entry: {},
  output: {
    path: path.resolve(__dirname, "src/assets/js"),
    filename: "[name].js"
  },
  module: {
    loaders: [
      {
        loader: "babel-loader",
        query: {
          presets: ["env"]
        },
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  }
}
