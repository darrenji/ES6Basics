/**
 * Created by Darren on 2017/9/7.
 */
function sumArgs(){
    var result=0;
    for(var i=0;i<arguments.length;++i){
        result+=arguments[i];
    }
    return result;
}
console.log(sumArgs(1,2, 3,4,5));

//但是，如果参数的数量有很多的会后，这种写法就不好了。

var arr=[];
for(var i=0;i<10;++i){
    arr[i]=Math.random();
}
console.log(sumArgs.apply(null, arr));

//接下来就来到Spread Operator
// spread operator把字符串转换成字符数组

let spreadingStrings = 'hello';
let charArray=[...spreadingStrings];
console.log(charArray);

//spread operator在解构中的运用
let notgood='not good'.split('');
let [,,,, ...good] = notgood;
console.log(good);

//spread operator的位置一定要在最后一个，否则报错