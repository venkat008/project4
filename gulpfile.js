'use strict';

var gulp = require('gulp'); // Load Gulp!
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

    gulp.task('scss', function (){
    gulp.src('./scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
    });

    gulp.task('browser-sync', function(){
    browserSync.init({
    server: {
           baseDir: "./"
  }
});
    gulp.watch('./scss/**/*.scss', ['scss']);
    gulp.watch(["index.html", "index1.html" ,"register.html" ,"encounter.html","report.html", "js/*.js", "css/*.css"]).on('change', browserSync.reload);
});
