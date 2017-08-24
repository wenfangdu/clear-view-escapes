const gulp = require("gulp"),
  watch = require("gulp-watch"),
  browserSync = require("browser-sync").create()

gulp.task("watch", function() {
  browserSync.init({
    open: false,
    notify: false,
    server: {
      baseDir: "src"
    }
  })
  watch("src/index.html", function() {
    browserSync.reload()
  })
  watch("src/dev/css/**/*.css", function() {
    gulp.start("cssInject")
  })
  watch("src/dev/js/**/*.js", function() {
    gulp.start("jsReload")
  })
})
gulp.task("cssInject", ["cssProcess"], function() {
  return gulp.src("src/assets/css/main.css").pipe(browserSync.stream())
})
gulp.task("jsReload", ["jsProcess"], function() {
  browserSync.reload()
})
