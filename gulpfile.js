const gulp = require('gulp');
const concat = require('gulp-concat');
const minify = require('gulp-terser');
const sourcemaps = require('gulp-sourcemaps');


gulp.task('js', () => {
    return gulp.src(['js/Word.js', 'js/Score.js', 'js/Outcome.js', 'js/Game.js', 'js/app.js'])
    .pipe(sourcemaps.init())
    .pipe(concat('app.js'))
    .pipe(minify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/js/'))
});

gulp.task('default', gulp.series('js'));