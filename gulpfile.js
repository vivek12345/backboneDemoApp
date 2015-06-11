var coffee = require('gulp-coffee');
var gulp = require('gulp');
 
gulp.task('coffee', function() {
  gulp.src('./site/js/**/*.coffee')
    .pipe(coffee({bare: true}))
    .pipe(gulp.dest('./site/js/'))
});