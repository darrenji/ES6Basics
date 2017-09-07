/**
 * Created by Darren on 2017/9/7.
 */
// 利用解构的特点创建对象
let shapeName='Rectangle',a=5,b=3;
let shape={shapeName, a, b, id:0};
console.log(shape);

// 利用解构的特点把对象赋值给变量
let {x,y}={x:3,y:4,z:2};
console.log(y, typeof y);