const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');

const config = {
    src: 'src',
    dest: 'dist',
    demo: 'demo',
    filename: 'trichotomy.css',
    minFilename: 'trichotomy.min.css'
}

gulp.task('copy', function () {
    return gulp.src(`${config.src}/${config.filename}`)
        .pipe(autoprefixer({}))
        .pipe(gulp.dest(config.dest));
});

gulp.task('prefix-minify-copy', function () {
    return gulp.src(`${config.src}/${config.filename}`)
        .pipe(autoprefixer({}))
        .pipe(cleanCSS({ debug: true }, (details) => {
            console.log(`${details.name}: ${details.stats.originalSize}`);
            console.log(`${details.name}: ${details.stats.minifiedSize}`);
        }))
        .pipe(rename(config.minFilename))
        .pipe(gulp.dest(config.dest));
});

gulp.task('copy-to-demo', function () {
    return gulp.src(`${config.dest}/${config.minFilename}`)
        .pipe(gulp.dest(config.demo));
});

gulp.task('default', gulp.series('copy', 'prefix-minify-copy', 'copy-to-demo'));

gulp.task('watch', function () {
    return gulp.watch(`${config.src}/${config.filename}`, gulp.series('default'));
});

gulp.task('build', gulp.series('default', 'watch'));