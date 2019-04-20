const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const { configuration } = require('./gulp.config');
const csso = require('gulp-csso');

const AUTOPREFIXER_BROWSERS = [
    'ie >= 10',
    'ie_mob >= 10',
    'ff >= 30',
    'chrome >= 34',
    'safari >= 7',
    'opera >= 23',
    'ios >= 7',
    'android >= 4.4',
    'bb >= 10'
];

module.exports = () => gulp.task('prefix-minify-css', () => {
    return gulp.src(configuration.paths.dist.css)
        .pipe(autoprefixer({ browsers: AUTOPREFIXER_BROWSERS }))
        .pipe(csso())
        .pipe(gulp.dest(configuration.paths.dist.entry))
});