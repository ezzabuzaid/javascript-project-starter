
const gulp = require('gulp');
const sass = require('gulp-sass');
const { configuration } = require('./gulp.config');

sass.compiler = require('node-sass');

module.exports.compile = () => gulp.task('compile-sass', function () {
    return gulp.src(configuration.paths.src.scss)
        .pipe(
            sass({
                errLogToConsole: true,
                outputStyle: 'nested',
                onError: sass.logError,
                precision: 10,
            }))
        .pipe(gulp.dest(configuration.paths.dist.entry))
});

module.exports.watch = () => gulp.task('sass:watch', function () {
    gulp.watch(configuration.paths.src.scss, ['sass']);
});
