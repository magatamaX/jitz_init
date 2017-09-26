var gulp = require('gulp');
var sass = require('gulp-sass');
var pug = require('gulp-pug');
var postcss = require('gulp-postcss');
var cssnext = require('postcss-cssnext');
var babel = require("gulp-babel");

// scss
var paths = {
  'scss': 'src/styles/',
  'css': 'public_html/styles/'
}
gulp.task('scss', function() {
  var processors = [
      cssnext()
  ];
  return gulp.src(paths.scss + '**/*.scss')
    .pipe(sass())
    .pipe(postcss(processors))
    .pipe(gulp.dest(paths.css))
});

// pug
gulp.task('pug', function() {
  return gulp.src(['src/**/*.pug', '!src/**/_*.pug'])
  .pipe(pug({
    pretty: true
  }))
  .pipe(gulp.dest('public_html/'));
});

// babel
gulp.task("babel_build", function () {
     return gulp.src("src/scripts/es6/*.js")
         .pipe(babel())
         .pipe(gulp.dest("public_html/scripts"));
 });

// watch
 gulp.task('watch', function() {
     gulp.watch('src/scripts/es6/*.js', ['babel_build']);
     gulp.watch('src/styles/**/*.scss', ['scss']);
     gulp.watch('src/**/*.pug', ['pug']);
 });

// defaltタスク（gulpだけで実行出来る）
gulp.task('default', ['pug', 'scss', 'babel_build', 'watch']);
