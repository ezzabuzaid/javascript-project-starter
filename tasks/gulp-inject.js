const gulp = require('gulp');
const inject = require('gulp-inject');
const { configuration } = require('./gulp.config');
// const inject = require('gulp-inject-string');
module.exports = () => gulp.task('inject-assets', () => {


  // gulp.src(configuration.paths.dist.html)
  //   .pipe(gulp.dest('build'));

  // gulp.src('src/example.html')
  //   .pipe(inject.after('</title>', '\n<link rel="stylesheet" href="test.css">\n'))
  //   .pipe(rename('after.html'))
  //   .pipe(gulp.dest('build'));
  const target = gulp.src(configuration.paths.dist.html);

  const sources = gulp.src(
    [configuration.paths.dist.css, configuration.paths.dist.js],
    {
      addRootSlash: true, read: false, relative: true,
      transform: function (filepath) {
        console.log(filepath)
        return `<link rel='stylesheet' href='test/test/${filepath} />`;
      }
    });

  return target.pipe(inject(sources))
    .pipe(gulp.dest(configuration.paths.dist.entry));
});

