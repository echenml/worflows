var gulp=require('gulp');
var gutil=require('gulp-util');

gulp.task('log',function(){
  gutil.log('Workflows are awesome');
});

gulp.task('hello',function(){
  gutil.log('This is task hello');
});