/**
 * Created by Darren on 2017/9/8.
 */
console.log(0 || 1);//1，||左边的先执行，如果是true就直接返回true其它不执行了，因为左边是0,是false,所有来到了右边，找到了1,即找到了true,||遇到true就不执行了

console.log(1||2);//1 左边第一个就是true,所有就返回1了

console.log(0&&1);//0，&&遇到false就不执行了，0就是false

console.log(1&&2);//2,&&遇到true继续执行

