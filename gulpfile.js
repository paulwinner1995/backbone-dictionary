const gulp = require('gulp');
const dust = require('gulp-dust');
const babel = require('gulp-babel');
const less = require('gulp-less');

const BASE_PATH = 'src/main/resources/static/';

const SRC_PATH = BASE_PATH + 'src/';
const DIST_PATH = BASE_PATH + 'dist/';

const TEMPLATE_SRC_PATH = SRC_PATH + 'templates/**/*.dust';
const TEMPLATE_DIST_PATH = DIST_PATH + 'templates/';

const SCRIPT_SRC_PATH = SRC_PATH + 'scripts/**/*.js';
const SCRIPT_DIST_PATH = DIST_PATH + 'scripts/';

const STYLE_LESS_PATH = SRC_PATH + 'less/**/*.less';
const STYLE_CSS_PATH = DIST_PATH + 'css/';

gulp.task('compile:templates', function() {
    return gulp.src(TEMPLATE_SRC_PATH)
        .pipe(dust({'config.amd': true}))
        .pipe(gulp.dest(TEMPLATE_DIST_PATH));
});

gulp.task('babel:scripts', function () {
    return gulp.src(SCRIPT_SRC_PATH)
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest(SCRIPT_DIST_PATH));
});

gulp.task('copy:fonts', function () {
   return gulp.src(BASE_PATH  + 'libs/bootstrap/fonts/*.{eot,svg,ttf,woff,woff2}')
       .pipe(gulp.dest(BASE_PATH  + 'dist/fonts/'));
});

gulp.task('compile:less', function () {
   return gulp.src(STYLE_LESS_PATH)
       .pipe(less())
       .pipe(gulp.dest(STYLE_CSS_PATH));
});

gulp.task('default', [
    'babel:scripts',
    'compile:templates',
    'compile:less',
    'copy:fonts'
]);