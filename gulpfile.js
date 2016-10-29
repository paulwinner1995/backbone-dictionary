const gulp = require('gulp'),
    dust = require('gulp-dust');

const BASE_PATH = 'src/main/resources/static/';

const SRC_PATH = BASE_PATH + 'src/';
const DIST_PATH = BASE_PATH + 'dist/';

const TEMPLATE_SRC_PATH = SRC_PATH + 'templates/**/*.dust';
const TEMPLATE_DIST_PATH = DIST_PATH + 'templates/';

gulp.task('dust-compile', function () {
    return gulp.src(TEMPLATE_SRC_PATH)
        .pipe(dust({'config.amd': true}))
        .pipe(gulp.dest(TEMPLATE_DIST_PATH));
});