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
