/**
 * Created by Darren on 2017/9/8.
 */
function sum(x){
    if(arguments.length==2){
        return arguments[0] + arguments[1];
    } else{
        //这里有闭包
        return function(y){return x+y;}
    }
}

console.log(sum(2,3));
console.log(sum(2)(3));


function sum1(x,y){
    if(y!== undefined){
        return x+y;
    } else {
        return function(y){return x+y;};
    }
}