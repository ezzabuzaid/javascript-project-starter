const gulp = require("gulp");
const { configuration } = require('./tasks/gulp.config');

// remove dist folder
require('./tasks/gulp-clean')();

require('./tasks/gulp-minify-js')();
require('./tasks/gulp-html')();

require('./tasks/gulp-compile-sass').compile();
require('./tasks/gulp-minify-css')();

// Inject css and js file
require('./tasks/gulp-inject')();

require('./tasks/gulp-serve').openBrowser();
require('./tasks/gulp-serve').initServer();
require('./tasks/gulp-serve').reload();
// require('./tasks/gulp-watch')();



const TASK_LIST = ['clean', ['minify-compress-js', 'compile-sass'], ['prefix-minify-css'], 'minify-html'];

const sugar = (...a) => gulp.series(...a.map((i) => Array.isArray(i) ? gulp.parallel(...i) : i));



gulp.task('watch', function () {
    gulp.watch(`${configuration.paths.src.entry}/**/*`, sugar(...TASK_LIST, 'reload-server'))
});


gulp.task("default", sugar(...TASK_LIST, 'init-server', 'watch'));


/**
 * ! export each task name from file rather explicty define them here
 * ! use browserSync plugin to avoid exclude the task the responsible for open the browser
 */