var gulp = require('gulp');
var replace = require('gulp-replace');
var katex = require('katex');

gulp.task('default', function() {
	return gulp.src('public/**/*.html')
	.pipe(replace(/^\\\[([\s\S]*)\\\]$/g, function(match, p1) {
		console.log('found math');
		return katex.renderToString(p1);
	}))
	.pipe(gulp.dest('public'));
});
