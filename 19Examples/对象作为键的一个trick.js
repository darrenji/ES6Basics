/**
 * Created by Darren on 2017/9/8.
 */
var a={},
    b={key:'b'},
    c={key:'c'};

a[b] = 123;
a[c] = 456;

console.log(a[b]);//456

//当把对象作为key的时候，javascript engine会执行stringify,所有对象的键就变成了[object object],所有a[b]和a[c]是一回事。