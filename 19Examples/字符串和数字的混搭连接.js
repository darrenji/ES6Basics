/**
 * Created by Darren on 2017/9/8.
 */
console.log(1+"2"+"2"); //122

console.log(1 + +"2" + "2");//32，+"2"这个具有优先级先执行，把它看做是数字2

console.log(1 + -"1" + "2");//02

console.log("A" - "B" + "2");//NaN2，减号不能用作字符串，A和B也不能转换成数字