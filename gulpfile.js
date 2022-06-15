'use strict';

const gulp = require('gulp');
const include = require('gulp-file-include');
const nodeSass = require('node-sass');
const gulpSass = require('gulp-sass');
const sass = gulpSass(nodeSass);
const browserify = require('browserify');
const babelify = require('babelify');
const sourcemaps = require('gulp-sourcemaps');
const buffer = require('gulp-buffer');
const source = require("vinyl-source-stream");
const uglify = require("gulp-uglify");
const autoprefixer = require('gulp-autoprefixer');
const sync = require('browser-sync').init({
	server: {
		baseDir: './release/'
	}
});

gulp.task('include', () => {
	return gulp.src("./src/html/*.html")
		.pipe(include())
		.pipe(gulp.dest("./release/"))
		.pipe(sync.stream())
});

gulp.task('sass', function() {
	return gulp.src('./src/scss/**/*.scss')
		.pipe(sass({
			outputStyle: 'compressed'
		}))
		.pipe(autoprefixer())
		.pipe(gulp.dest('./release/css'))
		.pipe(sync.stream());
});

gulp.task("js", () => {
	return browserify("./src/js/master.js").transform(babelify.configure({
		presets: ["@babel/preset-env"]
	}))
	.bundle()
	.pipe(source("master.js"))
	.pipe(buffer())
	// .pipe(uglify())
	.pipe(sourcemaps.init({loadMaps: true}))
	.pipe(gulp.dest("./release/js"))
	.pipe(sync.stream())
	
});

gulp.task("watch", () => {
	gulp.watch("./src/html/**/*.html", gulp.series("include"));
	gulp.watch("./src/scss/**/*.scss", gulp.series("sass"));
	gulp.watch("./src/js/**/*.js", gulp.series("js"));
})