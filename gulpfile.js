var gulp = require('gulp'),
gutil = require('gulp-util'),
sass = require('gulp-sass'),
webserver = require('gulp-webserver');


gulp.task('html', function() {
  return gulp.src('github-profile/*.html')
    .pipe(gulp.dest('dist'))
    // .pipe(reload());
});

gulp.task('styles', function() {
  return gulp.src('github-profile/*.css')
    .pipe(sass())
    .pipe(gulp.dest('dist'))
    // .pipe(reload());
});

gulp.task('server', function() {
  return gulp.src('dist')
    .pipe(webserver({ livereload: true }));
});

gulp.task('watch', function() {
  gulp.watch('github-profile/*.html', ['html']);
  gulp.watch('src/*.css', ['styles'])
});

// helper function called “reload” that will either return a stream to trigger LiveReload (if LiveReload is available) or simply return a noop stream
function reload() {
  if (webserver.reload) {
    return webserver.reload();
  }

  return gutil.noop();
}

gulp.task('build', ['styles', 'server']);
gulp.task('default', ['build', 'watch']);