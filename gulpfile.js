const gulp = require("gulp");
const { configuration } = require('./tasks/gulp.config');

require('./tasks/gulp-clean')();
require('./tasks/gulp-minify-js')();
require('./tasks/gulp-compile-sass').compile();
require('./tasks/gulp-minify-css')();
require('./tasks/gulp-html')();
require('./tasks/gulp-inject')();
require('./tasks/gulp-serve').openBrowser();
require('./tasks/gulp-serve').initServer();
require('./tasks/gulp-serve').reload();
// require('./tasks/gulp-watch')();



const TASK_LIST = ['clean', ['minify-compress', 'compile-sass', 'minify-html'], 'prefix-minify-css',];

const sugar = (...a) => gulp.series(...a.map((i) => Array.isArray(i) ? gulp.parallel(...i) : i));



gulp.task('watch', function () {
    gulp.watch(`${configuration.paths.src.entry}/**/*`, sugar(...TASK_LIST, 'reload-server'))
});


gulp.task("default", sugar(...TASK_LIST, 'open-browser', 'init-server', 'watch'));


/**
 * ! export each task name from file rather explicty define them here
 * ! use browserSync plugin to avoid exclude the task the responsible for open the browser
 */