var gulp = require("gulp");
var concat = require('gulp-concat');
var react = require('gulp-react');
var connect = require('gulp-connect');

//gulp.task("default", [ "restore", "version", "compile", "test", "pack" ]);

// gulp.task('transform', function() {
//   return gulp
//     .src(["./Magistrate/content/components/**/*.jsx"])
//     .pipe(react())
//     .pipe(concat("build.min.js"))
//     .pipe(gulp.dest("./Magistrate/content"));
// });
//



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
  gulp.watch(['./app/*.htm'], ['html']);
});

gulp.task('default', ['connect', 'watch']);
