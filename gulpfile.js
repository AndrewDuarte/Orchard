
//Calling in Gulp famework
var gulp = require('gulp');

//Calling in Gulp plugins
var minifyCSS = require('gulp-minify-css');
var htmlmin = require('gulp-htmlmin');
var jsmin = require('gulp-jsmin');


//Terminal example of gulp
gulp.task('test-gulp', function(){
	console.log('Gulp is working!');
});


//Minifying HTML file task
gulp.task('html-min', function() {
  return gulp.src('./app/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest(''));
});


//Minifying css file task
gulp.task('css-min',function(){
	return gulp.src('./app/css/main.css')
	.pipe(minifyCSS())
	.pipe(gulp.dest('./dist/css'))
});

////Minifying js file task
gulp.task('js-min', function () {
    gulp.src('./app/js/myjs.js')
        .pipe(jsmin())
        .pipe(gulp.dest('./dist/js'));
});
