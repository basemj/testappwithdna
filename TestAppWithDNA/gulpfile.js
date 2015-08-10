/// <binding ProjectOpened='LessAndMinifyCSS, bundleJavaScript' />
"use strict";

var gulp = require('gulp');
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');
var browserify = require('gulp-browserify');

gulp.task('LessAndMinifyCSS', function () {
    gulp.src('Content/testmain.less')
        .pipe(less())
        .pipe(gulp.dest('wwwroot/css'));
});

gulp.task('bundleJavaScript', function () {
    gulp.src('Scripts/testjs.js')
        .pipe(browserify({
            insertGlobals: true,
            debug: !gulp.env.production
        }))
        .pipe(gulp.dest('wwwroot/js'));
});