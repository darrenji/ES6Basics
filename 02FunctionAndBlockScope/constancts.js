/**
 * Created by Darren on 2017/9/6.
 */


/*
常量不能重新赋值
const PI = 3.1415;
PI=3.14;*/

//常量一定要赋值
//const PI;

//声明变量的时候，要尽量提前。

//练习1

/*'use strict'

var guessMe1=1;
let guessMe2=2;

{
   try{
        console.log(guessMe1,guessMe2);//没有打印出来，因为guessMe2在这个scope中处于tempory dead zone
   }catch(_){

   }

    let guessMe2=3;
    console.log(guessMe1,guessMe2);//1 3
}

console.log(guessMe1,guessMe2);//1 2

() =>{
    console.log(guessMe1); //不打印，因为没有执行
    var guessMe1=4;
    let guessMe2=5;
    console.log(guessMe1,guessMe2);//不打印，因为没有执行
};*/

//练习2e

'use strict';

var guessMe1=1
let guessMe2=2;

{
    let guessMe2=3;
    console.log(guessMe1, guessMe2) //1 3
    console.log(guessMe1, guessMe2) //1 3
}

console.log(guessMe1, guessMe2);//1 2

(()=>{
    var guessMe1=5;
    let guessMe2=6;
    console.log(guessMe1);//5
    console.log(guessMe1, guessMe2); //5 6
})();

console.log(guessMe1, guessMe2);//1 2