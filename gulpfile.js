var gulp = require('gulp');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var sourcemaps = require("gulp-sourcemaps");
var wrapper = require('gulp-wrapper');
var karma = require('karma').server;

var paths = {
  src: 'src/**/*',
  test: 'test/**/*',
  build: './build/'
};

gulp.task("babel", function () {
  return gulp.src("src/**/*.js")
    .pipe(babel({
      modules: "umd"
    }))
    .pipe(sourcemaps.init())
    .pipe(concat("lion.js"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist"));
});

/**
 * Run test once and exit
 */
gulp.task('karma-test', function (done) {
  karma.start({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done);
});

/**
 * Watch for file changes and re-run tests on each change
 */
gulp.task('tdd', function (done) {
  karma.start({
    configFile: __dirname + '/karma.conf.js',
    singleRun: false
  }, done);
});

gulp.task('watch', function (done) {
  gulp.watch(paths.src, ['babel']);
});


gulp.task('develop', ['watch', 'tdd']);


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
