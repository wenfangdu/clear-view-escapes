const gulp = require("gulp"),
  svgSprite = require("gulp-svg-sprite"),
  rename = require("gulp-rename"),
  del = require("del")

let config = {
  shape: {
    spacing: {
      padding: 1
    }
  },
  mode: {
    css: {
      sprite: "svg/sprite.svg",
      render: {
        css: {
          template: "gulp/templates/sprite.css"
        }
      }
    }
  }
}
gulp.task("clean", function() {
  return del("src/assets/img/sprite")
})
gulp.task("createSprite", ["clean"], function() {
  return gulp
    .src("src/assets/img/icons/**/*.svg")
    .pipe(svgSprite(config))
    .pipe(gulp.dest("src/assets/img/sprite"))
})
gulp.task("copyCss", ["createSprite"], function() {
  return gulp
    .src("src/assets/img/sprite/css/sprite.css")
    .pipe(rename("_sprite.css"))
    .pipe(gulp.dest("src/dev/css/modules"))
})
gulp.task("sprite", ["clean", "createSprite", "copyCss"])
