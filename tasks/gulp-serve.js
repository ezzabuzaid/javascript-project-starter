const gulp = require('gulp');
const open = require('gulp-open');
const connect = require('gulp-connect');
const portfinedr = require('portfinder');
const { configuration } = require('./gulp.config');

exports.initServer = () => gulp.task('init-server', async () => {
    const port = await portfinedr.getPortPromise();
    connect.server({
        root: configuration.paths.dist.entry,
        port,
        livereload: true
    });
});

exports.openBrowser = () => gulp.task('open-browser', async () => {
    const port = await portfinedr.getPortPromise();
    return gulp.src(`${configuration.paths.dist.html}`)
        .pipe(open({ uri: `http://localhost:${port}/` }));
});

exports.reload = () => gulp.task('reload-server', async () => {
    return gulp.src(configuration.paths.dist.entry)
        .pipe(connect.reload());
});

exports.connect = connect;
