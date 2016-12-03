

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cssnano = require('gulp-cssnano'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    del = require('del'),
    watch = require('gulp-watch')


gulp.task('default', function() {}) ;

gulp.task('sass:watch', function () {
        gulp.watch('./sass/**/*.scss', ['sass']);
    });


    gulp.task('sass', function () {
        gulp.src('./src/style.scss')
            .pipe(sass().on('error', sass.logError))
            .pipe(gulp.dest('./public/style'));
    });

    
