var gulp = require('gulp');

var clean = require('gulp-clean');

var webpack = require('gulp-webpack');

var config = require('./webpack.config');

var uglify = require( 'gulp-uglify');

var browserSync = require('browser-sync').create();
var reload = browserSync.reload;


//删除发布目录
gulp.task('clean',function(){
	return gulp.src('./dist').pipe( clean() );
});

gulp.task('miniJS', ['clean'], function(){
	var stream = gulp.src("./src").pipe( webpack(config) )
		//.pipe( uglify() )
		.pipe( gulp.dest('./dist') );

	return stream;
});


gulp.task('reload_by_js', function(){
	gulp.run('miniJS', reload);
});

gulp.task( 'server', ['miniJS'], function(){
	browserSync.init({
	server: {
		baseDir: "./"
	}
	});

	//修改html时，加载页面
	gulp.watch("*.html").on("change", reload);
	gulp.watch("./**/*.css").on("change", reload);
	gulp.watch('./pages/**/*.js', ['reload_by_js']);
});

gulp.task('default', ['server']);

