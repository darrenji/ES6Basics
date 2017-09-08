/**
 * Created by Darren on 2017/9/8.
 */
//不是所有的浏览器现在都支持ES6。我们需用用Babel来编译。

//Grunt, Gulp, Webpack都有Babel的插件

// 安装Babel插件
// npm install --save-dev gulp-babel

//gulpfile.js

var gulp = require('gulp'),
    babel = require('gulp-babel');

gulp.task('build', function(){
    return gulp.src('src/app.js')
        .pipe(babel())
        .pipe(gulp.dest('build'));
})