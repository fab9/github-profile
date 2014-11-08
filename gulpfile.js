var gulp = require('gulp'),
gutil = require('gulp-util'),
sass = require('gulp-sass'),
webserver = require('gulp-webserver');


gulp.task('html', function() {
  return gulp.src('*.html')
    .pipe(gulp.dest('dist'))
    .pipe(reload());
});

gulp.task('sass', function() {
  return gulp.src('/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist'))
    .pipe(reload());
});

gulp.task('server', function() {
  return gulp.src('dist')
    .pipe(webserver({ livereload: true }));
});

gulp.task('watch', function() {
  gulp.watch('*.html', ['html']);
  gulp.watch('*.css', ['sass']);
});

// helper function called “reload” that will either return a stream to trigger LiveReload (if LiveReload is available) or simply return a noop stream
function reload() {
  if (webserver.reload) {
    return webserver.reload();
  }
    return gutil.noop();
}

gulp.task('default', ['server', 'watch', 'html', 'sass']);