const gulp = require("gulp"),
  postcss = require("gulp-postcss"),
  cssnext = require("postcss-cssnext"),
  cssImport = require("postcss-import")

gulp.task("cssProcess", function() {
  return gulp
    .src("src/dev/css/main.css")
    .pipe(postcss([cssImport, cssnext]))
    .on("error", function(err) {
      console.log(err.toString())
      this.emit("end")
    })
    .pipe(gulp.dest("src/assets/css"))
})
