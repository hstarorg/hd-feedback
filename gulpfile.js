const gulp = require('gulp4');
const browsersync = require('browser-sync');
const less = require('gulp-less');
const shelljs = require('shelljs');
const rollup = require('rollup');
const resolve = require('rollup-plugin-node-resolve');
const babel = require('rollup-plugin-babel');
const uglify = require('rollup-plugin-uglify');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');

const isProd = process.argv.indexOf('--min') >= 0;
let server;

const plugins = [
  resolve(),
  babel({
    exclude: ['node_modules/**']
  }),
  ...(isProd ? [uglify()] : [])
];

gulp.task('clean', done => {
  shelljs.rm('-rf', 'dist');
  done();
});

gulp.task('compile:js', done => {
  rollup.rollup({ input: 'src/index.js', plugins })
    .then(bundle => {
      return bundle.write({
        file: `dist/hd-feedback${isProd ? '.min' : ''}.js`,
        format: 'umd',
        name: 'hdFeedback',
        sourcemap: true
      });
    })
    .then(() => done(), err => {
      err && console.error(err);
      done();
    });
});

gulp.task('compile:less', () => {
  let gulpStream = gulp
    .src(['src/less/index.less'])
    .pipe(less())
    .pipe(concat(`hd-feedback${isProd ? '.min' : ''}.css`));
  if (isProd) {
    gulpStream = gulpStream.pipe(cleanCSS({ compatibility: 'ie8' }));
  }
  return gulpStream.pipe(gulp.dest('dist'));
});

gulp.task('serve', done => {
  server = browsersync.init({
    server: {
      baseDir: '.',
      directory: false
    },
    startPath: '/examples/index.html'
  });
  done();
});

gulp.task('compile', gulp.series('compile:js', 'compile:less'));

gulp.task('reload', done => {
  server.reload();
  done();
});

gulp.task('watch', done => {
  gulp.watch('src/less/*.less', gulp.series('compile:less', 'reload'));
  gulp.watch('src/**/*.js', gulp.series('compile:js', 'reload'));
  gulp.watch('examples/*.html', gulp.series('reload'));
  done();
});

gulp.task('dev', gulp.series('clean', 'compile', gulp.parallel('serve', 'watch')));

gulp.task('build', gulp.series('clean', 'compile'));
