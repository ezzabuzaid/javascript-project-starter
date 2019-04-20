
const rev = require('gulp-rev');

const gulp = require('gulp');
const sass = require('gulp-sass');
const { configuration } = require('./gulp.config');

sass.compiler = require('node-sass');

module.exports.compile = () => gulp.task('compile-sass', () => {
    return gulp.src(configuration.paths.src.scss)
        .pipe(
            sass({
                errLogToConsole: true,
                outputStyle: 'nested',
                onError: sass.logError,
                precision: 10,
            }))
        .pipe(rev())
        .pipe(gulp.dest(configuration.paths.dist.entry))
});

module.exports.watch = () => gulp.task('sass:watch', () => {
    gulp.watch(configuration.paths.src.scss, ['sass']);
});
