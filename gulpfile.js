var gulp = require('gulp');
var cheerio = require('gulp-cheerio');
var katex = require('katex');

gulp.task('default', function() {
	return gulp.src('public/**/*.html')
	.pipe(cheerio(function($, file) {
		$('span.math').each(function() {
			var span = $(this);
			span.replaceWith(katex.renderToString(span.text().replace(/(\\\[|\\\])/g, ""), {
				displayMode: true
			}));
		});
	}))
	.pipe(gulp.dest('public'));
});
