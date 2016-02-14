var gulp = require("gulp");
var concat = require('gulp-concat');
var connect = require('gulp-connect');
var babel = require('gulp-babel');
var shell = require('gulp-shell');
var debug = require('gulp-debug');

gulp.task('transform', function() {
  return gulp
    .src(['./src/**/*.jsx'])
    .pipe(babel({ presets: [ 'es2015', 'stage-2', 'react'] }))
    .pipe(concat("build.min.js"))
    .pipe(gulp.dest("./app"));
});

gulp.task('connect', function() {
  connect.server({
    root: 'app',
    livereload: true
  });
});

gulp.task('html', function () {
  gulp.src('./app/*.htm')
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(['./app/*.htm', './app/*.js'], ['html']);
  gulp.watch(['./src/**/*.jsx'], ['transform']);
  gulp.watch(['./tests/**/*.js'], ['babel']);
});

gulp.task('test', function() {
  return gulp
    .src("./tests/**/*.js")
    .pipe(babel({ presets: [ 'es2015', 'stage-2', 'react'] }))
    .pipe(gulp.dest("./bin"))
    .pipe(shell(['node <%= file.path %>']));
});

gulp.task('default', ['connect', 'watch', 'transform']);
