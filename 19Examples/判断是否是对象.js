/**
 * Created by Darren on 2017/9/8.
 */

// null也是一个对象
var bar = null;
console.log(typeof bar === "object");

//函数可以看做是对象，但不是对象
var fn = function(){
    console.log("hell0");
};
console.log(typeof fn === "object");

//完整判断是否是对象的方式
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}
var person = new Person("darren",38);
console.log((person !== null) && (typeof person === "object"));

// 如果想把函数也看做对象的话
console.log((person !== null) && (typeof person === "object") || typeof person == "function");

//数组也是对象
var arr1 = [1,2];
console.log(typeof  arr1 === "object");

//如果不想把数组看做是对象
console.log((person != null)&&(typeof person ==="object")&&(toString.call(person) !== "[object Array]"));
