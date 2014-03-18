var gulp = require('gulp'),
    swig = require('gulp-swig')

    gulp.task('default', function () {

        var options = {},
            languages = ['en', 'it'];

        languages.forEach(function (language) {
            options[language] = {
                data: {
                    tr: require('./languages/' + language)
                },
                ext: '.html'
            };
        });

        gulp.src('./swig/**/*.html', {
            read: false
        })
            .pipe(swig(options['en']))
            .pipe(gulp.dest('./'))
        
        gulp.src('./swig/**/*.html', {
            read: false
        })
            .pipe(swig(options['it']))
            .pipe(gulp.dest('./it'));

    });