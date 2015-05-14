var gulp        = require('gulp');

var streamify   = require('gulp-streamify');

var source = require('vinyl-source-stream');
var watchify  = require('watchify');
var browserify  = require('browserify');
var babelify  = require('babelify');
var uglify  = require('gulp-uglify');

var sass        = require('gulp-sass');

var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;

var eslint = require('gulp-eslint');

var b = watchify(browserify({
    entries: './src/js/app.js',
    debug: true,
    cache: {},
    packageCache: {}
}));

function bundle(){
    gulp.src(['./src/js/**/*.js'])
        .pipe(eslint())
        .pipe(eslint.format());

    return b.transform('babelify')
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./dist/js'));
}

function update(){
    return bundle().pipe(reload({stream: true}));
}

function jsMin(){
    return bundle().pipe(streamify(uglify()))
        .pipe(gulp.dest('./dist/js'));
}

b.on('update', update);

gulp.task('js', bundle);

gulp.task('sass', function() {
    return gulp.src("./src/scss/app.scss")
        .pipe(sass())
        .pipe(gulp.dest("./dist/css"))
        .pipe(reload({stream: true}));
});

gulp.task('serve', ['sass', 'js'], function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("./**/*.html").on('change', reload);
    gulp.watch("./**/*.scss", ['sass']);
});

gulp.task('jsMin', jsMin);
