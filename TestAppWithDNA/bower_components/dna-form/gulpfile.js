var gulp = require('gulp');
var less = require('gulp-less');
var connect = require('gulp-connect');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

//++++++++++++++++++++++
//+ CSS 
//++++++++++++++++++++++
gulp.task('less', function () {
	gulp.src('./demo/src/**/*.less')
		.pipe(less())
		.pipe(gulp.dest('./demo/build'));
});

//++++++++++++++++++++++
//+ Javascript
//++++++++++++++++++++++
// TODO: work out how browser-resolve works so we can set the components directory as a default to require
function jsModules ( demoPath, componentPath ) {
	// TODO: A very brittle way to work out which module changed and only re-bundle that module
	var dest, filePath, module;
	if ( demoPath ) {
		dest = demoPath.replace('src', 'build').slice(0, -7);
		filePath = demoPath;
	} else if ( componentPath ) {
		module = componentPath.split('/').pop().slice(0, -3);
		filePath = './demo/src/' + module + '/demo.js';
		dest =  './demo/build/' + module + '/';
	}
	return browserify({
		entries: [filePath],
		debug: true,
	})
	.transform(babelify)
	.bundle()
	.on('error', function(err){
		console.log(err.message);
	this.end();
	})
	.pipe(source('demo.js'))
	.pipe(gulp.dest(dest));
} 

//++++++++++++++++++++++
//+ HTML 
//++++++++++++++++++++++ 
gulp.task('html:copy', function () {
	gulp.src('./demo/src/**/*.html')
		.pipe(gulp.dest('./demo/build/'));
});

//++++++++++++++++++++++
//+ Images
//++++++++++++++++++++++
gulp.task('img:copy', function () {
	gulp.src('./demo/stub/images/**/*.{png,gif,webp,jpg,jpeg,svg}')
		.pipe(gulp.dest('./demo/build/img'));
});

//++++++++++++++++++++++
//+ Watch 
//++++++++++++++++++++++ 
gulp.task('watch:less', function () {
	gulp.watch(['./components/less/**/*.less', './demo/src/**/*.less'], ['less']);
});

gulp.task('watch:html', function () {
	gulp.watch(['./demo/src/**/*.html'], ['html:copy']);
});

gulp.task('watch:images', function () {
	gulp.watch(['./demo/src/stub/images/**/*.{png,gif,webp,jpg,jpeg,svg}'], ['img:copy']);
});

gulp.task('watch:jsDemo', function(){
	var watcher = gulp.watch('./demo/src/**/*.js');
	watcher.on('change', function(event) {
		jsModules(event.path, undefined);
	});  
});

gulp.task('watch:jsComponents', function(){
	var watcher = gulp.watch('./components/js/**/*.js');
	watcher.on('change', function(event) {
		jsModules(undefined, event.path);
	});  
});

//++++++++++++++++++++++
//+ Server 
//++++++++++++++++++++++
gulp.task('dev:serve', function() {
	connect.server({
		root: 'demo/build',
		port: 8181,
		livereload: true
	});
});

//++++++++++++++++++++++
//+ CLI tasks
//++++++++++++++++++++++
gulp.task('default', [
	'html:copy', 
	'img:copy', 
	'less', 
	'dev:serve', 
	'watch:html', 
	'watch:images',
	'watch:less', 
	'watch:jsDemo', 
	'watch:jsComponents'
]);	