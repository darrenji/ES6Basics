/**
 * Created by Darren on 2017/9/8.
 */
//�������е���������ڶ�֧��ES6������������Babel�����롣

//Grunt, Gulp, Webpack����Babel�Ĳ��

// ��װBabel���
// npm install --save-dev gulp-babel

//gulpfile.js

var gulp = require('gulp'),
    babel = require('gulp-babel');

gulp.task('build', function(){
    return gulp.src('src/app.js')
        .pipe(babel())
        .pipe(gulp.dest('build'));
})