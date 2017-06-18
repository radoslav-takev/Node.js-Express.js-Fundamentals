const gulp = require('gulp')
const MINIFY_CSS = require('gulp-clean-css')
const RENAME = require('gulp-rename')

gulp.task('minify-css', () => {
  gulp.src('content/styles/*.css')
        .pipe(MINIFY_CSS())
        .pipe(RENAME({
          suffix: '.min'
        }))
        .pipe(gulp.dest('content/styles'))
})
