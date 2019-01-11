const gulp = require("gulp");
const htmlmin = require('gulp-htmlmin');
const { configuration } = require('./gulp.config');


module.exports = () => gulp.task('minify-html', () => {
    return gulp.src(configuration.paths.src.html)
        .pipe(htmlmin({
            collapseWhitespace: true,
            useShortDoctype: true,
            removeStyleLinkTypeAttributes: true,
            removeComments: false,
            // ignoreCustomComments
        }))
        .pipe(gulp.dest(configuration.paths.dist.entry));
});
