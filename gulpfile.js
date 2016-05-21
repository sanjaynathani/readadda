'use strict';

var gulp = require('gulp');
var path = require('path');
var sourcemaps = require('gulp-sourcemaps');
var ts = require('typescript');
var del = require('del');
var concat = require('gulp-concat');
var runSequence = require('run-sequence');
var templateCache = require('gulp-angular-templatecache');
var plugins = require('gulp-load-plugins')();

var serverProject = plugins.typescript.createProject('server/tsconfig.json');
var clientProject = plugins.typescript.createProject('client/tsconfig.json');

/*
  jsNPMDependencies, sometimes order matters here! so becareful!
*/
var jsNPMDependencies = [
    'systemjs/dist/system-polyfills.js',
    'systemjs/dist/system.js',
    'es6-shim/es6-shim.min.js',
    'rxjs/bundles/Rx.js',
    'angular2/bundles/angular2-polyfills.js',
    'angular2/bundles/angular2.dev.js',
    'angular2/bundles/router.dev.js',
    'angular2/bundles/http.dev.js',
    'angular2/es6/dev/src/testing/shims_for_IE.js'
];

/*
  App other dependencies
*/
var appDependencies = [
        'ext/jquery.min.js',
        'ext/angular.min.js',
        'ext/nicEdit.js',
        'ext/nicEditorIcons.gif',
        'ext/ckeditor.js',
        'ext/config.js',
        'ext/styles.js',
        'ext/lang/*.js',
        'ext/skins/**/*.*',
        
        'ext/plugins/widgetbootstrap/**/*.js',
        'ext/contents.css',
	'css/styles.css',
        'ext/plugins/widgetbootstrap/*.css',
	'bootstrap/css/bootstrap.css',
	'bootstrap/css/bootstrap-theme.min.css',
	'bootstrap/css/ui-bootstrap-1.2.5-csp.css',
	'bootstrap/js/bootstrap.min.js',
	'bootstrap/js/ui-bootstrap-1.2.5.js',
	'bootstrap/js/ui-bootstrap-tpls-1.2.5.js',
        'bootstrap/fonts/*',
        'data/*.json'
	
];

gulp.task('clean', function(){
    return del('dist');
});

gulp.task('nodelibs', function(){
    var mappedNPMPaths = jsNPMDependencies.map(function(file) {return path.resolve('node_modules', file);});
    var copyJsNPMDependencies = gulp.src(mappedNPMPaths, {base:'node_modules'})
        .pipe(gulp.dest('dist/libs'));
    return copyJsNPMDependencies;
});

gulp.task('applibs', function(){
    var mappedAppPaths = appDependencies.map(function(file) {return path.resolve('client', file);});
    var copyAppDependencies = gulp.src(mappedAppPaths, {base:'client'})
        .pipe(gulp.dest('dist/libs'));
    return copyAppDependencies;
});

gulp.task('index', function(){
    //Let's copy our index into dist  
    var copyIndex = gulp.src('client/index.html')
        .pipe(plugins.inject(gulp.src(['dist/libs/systemjs/**/*.js', 'dist/libs/angular2/**/*.js', 
                'dist/libs/rxjs/**/*.js', 'dist/libs/ext/**/*.js', 'dist/libs/bootstrap/**/*.js', 
                'dist/libs/*.js']),{ignorePath: 'dist',addRootSlash: false}))
        .pipe(plugins.inject(gulp.src('dist/libs/**/*.css'),{ignorePath: 'dist',addRootSlash: false}))
        .pipe(gulp.dest('dist'));
    return copyIndex;
});

gulp.task('server', function() {
	var glob = 'server/**/!(*.spec).ts';
	var dest = 'dist';
	return gulp.src(glob, { since: gulp.lastRun('server') })
                //.pipe(sourcemaps.init())
		.pipe(plugins.typescript(serverProject)).js
                //.pipe(sourcemaps.write())
		.pipe(gulp.dest(dest));
		
});

gulp.task('client', function() {
	var glob = 'client/app/**/!(*.spec).ts';
	var dest = 'dist/app';
	return gulp.src(glob,{ since: gulp.lastRun('client') })
                //.pipe(sourcemaps.init())
		.pipe(plugins.inlineNg2Template({ useRelativePaths: true }))
		.pipe(plugins.typescript(clientProject)).js
                //.pipe(sourcemaps.write())
		.pipe(gulp.dest(dest));
		
});

gulp.task('build', gulp.series(
	'clean',
	gulp.parallel('nodelibs', 'applibs'),
	'index',
        gulp.parallel('server', 'client')
));