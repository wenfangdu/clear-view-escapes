const gulp = require("gulp"),
  webpack = require("webpack"),
  webpackConfig = require("../../webpack.config")

gulp.task("jsProcess", function(callback) {
  webpack(webpackConfig, function(err) {
    if (err) {
      console.log(err.toString())
    }
    callback()
  })
})
