const gulp = require('gulp')
const htmlmin = require('gulp-htmlmin')
const rename = require('gulp-rename')

gulp.task('minify', function () {
    gulp.src('views/**/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('views/'))
});