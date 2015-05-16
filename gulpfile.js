var gulp = require('gulp');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var sourcemaps = require("gulp-sourcemaps");
var wrapper = require('gulp-wrapper');
var mocha = require('gulp-mocha');

var paths = {
  src: 'src/**/*',
  build: './build/'
};

gulp.task("babel", function () {
  return gulp.src("src/**/*.js")
    .pipe(sourcemaps.init())
    .pipe(concat("lion.js"))
    .pipe(wrapper({
       header: require(paths.build + "code-header"),
       footer: require(paths.build + "code-footer")
    }))
    .pipe(babel())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist"));
});

gulp.task('watch', function() {
  gulp.watch(paths.src, ['babel']);
});

gulp.task('default', ['babel']);


(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        root.lionjs = factory();
  }
}(this, function () {
    return {};
}));




