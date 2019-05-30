const gulp = require("gulp");
const { configuration } = require('./tasks/gulp.config');

const clean = require('./tasks/gulp-clean');
const minifyJS = require('./tasks/gulp-minify-js');
const compleSASS = require('./tasks/gulp-compile-sass');
const html = require('./tasks/gulp-html');
const minifyCSS = require('./tasks/gulp-minify-css');



// TODO watch sass not work
// TODO Inject css and js file
require('./tasks/gulp-inject')();

const server = require('./tasks/gulp-serve');
server.openBrowser();
server.initServer();
server.reload();


const TASK_LIST = [clean.name, [minifyJS.name, compleSASS.name], minifyCSS.name, html.name];
const sugar = (...a) => gulp.series(...a.map((i) => Array.isArray(i) ? gulp.parallel(...i) : i));

gulp.task('watch', function () {
    gulp.watch(`${configuration.paths.src.entry}/**/*`, sugar(...TASK_LIST, 'reload-server'))
});

gulp.task("default", sugar(...TASK_LIST, 'init-server', 'watch'));

/**
 * ! use browserSync plugin to avoid exclude the task the responsible for open the browser
 */