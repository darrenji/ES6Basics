/**
 * Created by Darren on 2017/9/7.
 */
let shapeName='Rectangle', a=5, b=3;

let shape={
    shapeName,
    a,
    b,
    logArea(){console.log('Area: ' + (a*b));},
    id:0
};

//在对象中方法、操作的命名方法