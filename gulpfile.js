const gulp = require('gulp');
const dust = require('gulp-dust');
const babel = require('gulp-babel');

const BASE_PATH = 'src/main/resources/static/';

const SRC_PATH = BASE_PATH + 'src/';
const DIST_PATH = BASE_PATH + 'dist/';

const TEMPLATE_SRC_PATH = SRC_PATH + 'templates/**/*.dust';
const TEMPLATE_DIST_PATH = DIST_PATH + 'templates/';

const SCRIPT_SRC_PATH = SRC_PATH + 'scripts/**/*.js';
const SCRIPT_DIST_PATH = DIST_PATH + 'scripts/';

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

gulp.task('default', ['compile:templates', 'babel:scripts']);