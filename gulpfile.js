const gulp = require('gulp');
const dust = require('gulp-dust');

const BASE_PATH = 'src/main/resources/static/';

const SRC_PATH = BASE_PATH + 'src/';
const DIST_PATH = BASE_PATH + 'dist/';

const TEMPLATE_SRC_PATH = SRC_PATH + 'templates/**/*.dust';
const TEMPLATE_DIST_PATH = DIST_PATH + 'templates/';

const SCRIPT_SRC_PATH = SRC_PATH + 'scripts/**/*.js';
const SCRIPT_DIST_PATH = DIST_PATH + 'scripts/';

gulp.task('compile:template', function () {
    return gulp.src(TEMPLATE_SRC_PATH)
        .pipe(dust({'config.amd': true}))
        .pipe(gulp.dest(TEMPLATE_DIST_PATH));
});

gulp.task('copy:scripts', function () {
    return gulp.src(SCRIPT_SRC_PATH)
        .pipe(gulp.dest(SCRIPT_DIST_PATH));
});

gulp.task('clean', function () {
   // TODO: Should add logic for cleaning dist directory
});

gulp.task('default', function () {
    gulp.start('dust-compile');
});