/**
 * Created by Darren on 2017/9/7.
 */
let originalArray=[2,3,4];
let [...clonedArray]=originalArray;

//通过spread operator赋值的新数组和原来的数组不是同一个数组
console.log(clonedArray==originalArray,clonedArray,originalArray);