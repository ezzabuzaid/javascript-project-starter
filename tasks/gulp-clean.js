const gulp = require("gulp");
const del = require('del');
const { configuration } = require('./gulp.config');

exports.name = 'clean';
exports.func = gulp.task(exports.name, () => del([configuration.paths.dist.entry]));