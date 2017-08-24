const gulp = require("gulp"),
  postcss = require("gulp-postcss")

gulp.task("cssProcess", function() {
  return gulp
    .src("src/dev/css/main.css")
    .pipe(
      postcss([
        require("postcss-import"),
        require("postcss-nested"),
        require("postcss-cssnext"),
        require("postcss-hexrgba")
      ])
    )
    .on("error", function(err) {
      console.log(err.toString())
      this.emit("end")
    })
    .pipe(gulp.dest("src/assets/css"))
})
