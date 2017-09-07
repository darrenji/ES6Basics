/**
 * Created by Darren on 2017/9/7.
 */
let symbol1=Symbol();
let symbol2=Symbol();
console.log(symbol1===symbol2);//false

//Symbol也是primitive type,没有一个Symbol值是相同的，换句话说，Symbol的值是唯一的。

let myObject={
    publicProperty:'value of myObject myObject["publicProperty"]'
};

myObject.symbol1 = "Value of myObject[symbol1]";
myObject.symbol2 = "Value of myObject[symbol2]";
console.log(myObject);

console.log(myObject.symbol1);