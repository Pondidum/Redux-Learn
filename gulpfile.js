var gulp = require("gulp");
var concat = require('gulp-concat');
var react = require('gulp-react');
var connect = require('gulp-connect');

gulp.task('transform', function() {
  return gulp
    .src(['./src/**/*.jsx'])
    .pipe(react())
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
});

gulp.task('default', ['connect', 'watch', 'transform']);
