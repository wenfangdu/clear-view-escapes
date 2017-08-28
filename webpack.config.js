const path = require("path")

module.exports = {
  entry: {
    main: "./src/dev/js/main.js",
    vendor: "./src/dev/js/vendor.js"
  },
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
  },
  resolve: {
    alias: {
      waypoints: "waypoints/lib/noframework.waypoints"
    }
  }
}
