const rev = require('gulp-rev');
const inject = require('gulp-inject-string');

const gulp = require("gulp");
const minifyJS = require('gulp-minify'); // will create to file for min and unmin
const uglify = require('gulp-uglify-es').default;
const { configuration } = require('./gulp.config');


exports.name = 'minify-compress-js';
exports.func = gulp.task(exports.name, () => {
    return gulp.src(configuration.paths.src.js)
        // .pipe(minifyJS())
        .pipe(uglify())
        .pipe(rev())
        // .pipe(inject.before('<body', `<script src="${dest}"></script>`))
        .pipe(gulp.dest(configuration.paths.dist.entry))
});