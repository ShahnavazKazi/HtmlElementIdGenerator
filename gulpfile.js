
var gulp = require('gulp'),
path = require('path'),
replace = require('gulp-replace');


var counter = 0;
var preFileName = null;

function getCounter(file) {
    var currentFileName = null;
    if (counter === 0) {
        preFileName = file;
    }
    currentFileName = file;
    if (preFileName === currentFileName) {
        counter++;
        return counter;
    } else {
        preFileName = currentFileName;
        counter = 1;
        return counter;
    }
}

gulp.task('generate-missing-ids', function () {
    gulp.src(['./sample1.html'], {base: "./"})
        .pipe(replace(/<[a-zA-Z0-9*-.]+(?!([^>]*?)id\s?=)(?:[^>]*?)/g, function (match) {
            return (match + ' id="' + path.basename(this.file.path).split('.')[0] + '_' + getCounter(path.basename(this.file.path)) + '"');
        }))
        .pipe(gulp.dest('./'));
});