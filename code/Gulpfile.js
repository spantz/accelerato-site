'use strict';

var gulp = require('gulp'),
  jshint = require('gulp-jshint'),
  sass = require('gulp-sass'),
  babel = require('gulp-babel'),
  transform = require('vinyl-transform'),
  browserify = require('browserify');
  

gulp.task('sass', function () {
  gulp.src('./src/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/stylesheets'));
});

// gulp.task('babel', function(){
//    return gulp.src('./src/js/*.js')
//         .pipe(babel())
//         .pipe(gulp.dest('./public/js/'));
// });

gulp.task('browserify', function () {
    var browserified = transform(function(filename) {
        var b = browserify(filename);
        return b.bundle();
    });

    return gulp.src(['./src/js/*.js'])
        .pipe(browserified)
        // .pipe(babel())
        .pipe(gulp.dest('./public/js/'));
});

gulp.task('watch', function(){
    gulp.watch('./src/js/*.js', ['babel']);
    gulp.watch('./src/scss/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'babel', 'browserify', 'watch']);