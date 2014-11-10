var gulp = require('gulp'),
gutil = require('gulp-util'),
webserver = require('gulp-webserver');


gulp.task('html', function() {
  return gulp.src('*.html')
    .pipe(gulp.dest('dist'))
    .pipe(reload());
});

gulp.task('css', function() {
  return gulp.src('*.css')
    .pipe(gulp.dest('dist'))
    .pipe(reload());
});

gulp.task('js', function() {
  return gulp.src('scripts.js')
    .pipe(gulp.dest('dist'))
    .pipe(reload());
});

gulp.task('json', function() {
  return gulp.src('*.json')
    .pipe(gulp.dest('dist'))
    .pipe(reload());
});

gulp.task('server', function() {
  return gulp.src('dist')
    .pipe(webserver({ livereload: true }));
});

gulp.task('watch', function() {
  gulp.watch('*.html', ['html']);
  gulp.watch('*.css', ['css']);
  gulp.watch('scripts.js', ['js']);
  gulp.watch('*.json', ['json']);
});

// helper function called “reload” that will either return a stream to trigger LiveReload (if LiveReload is available) or simply return a noop stream
function reload() {
  if (webserver.reload) {
    return webserver.reload();
  }
    return gutil.noop();
}

gulp.task('default', ['server', 'watch', 'html', 'css', 'js', 'json']);