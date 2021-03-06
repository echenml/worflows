var gulp=require('gulp');
var gutil=require('gulp-util');
var coffee=require('gulp-coffee');
var concat=require('gulp-concat');
var browserify=require('gulp-browseirfy');

var coffeeSources=['components/coffee/tagline.coffee'];
var jsSources=[
	'components/scripts/rclick.js',
	'components/scripts/pixgrid.js',
	'components/scripts/tagline.js',
	'components/scripts/template.js'
]

gulp.task('log',function(){
  gutil.log('Workflows are awesome');
});

gulp.task('hello',function(){
  gutil.log('This is task hello');
});

gulp.task('coffee',function(){
  gulp.src(coffeeSources)
  .pipe(coffee({bare:true})
  	.on('error',gutil.log))
  .pipe(gulp.dest('components/scripts'))
  	
});

gulp.task('js',function(){
	gulp.src(jsSources)
	.pipe(concat('script.js'))
	.pipe(browserify())
	.pipe(gulp.dest('builds/development/js'))
});