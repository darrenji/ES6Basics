/**
 * Created by Darren on 2017/9/8.
 */
var arr1 = "john".split('');

//arr1虽然reverse了，但指向的arr1
var arr2 = arr1.reverse();
var arr3 = "jones".split('');

//所有，arr2任何的操作，改变的arr2指向的引用地址，arr2和arr1的指向是一样的
arr2.push(arr3);

console.log('arr1');
console.log(arr1);
console.log('-------------')
console.log('arr2');
console.log(arr2);