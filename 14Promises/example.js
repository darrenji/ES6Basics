/**
 * Created by Darren on 2017/9/8.
 */
// promise表示异步操作的结果，代表一个将来能处理的值
// promise是有状态的：pending, fulfilled, rejected

let promise1 = new Promise(function(resolve, reject){
    // call resolve(value)来解析一个promise
    // call reject(reason)拒绝一个promise
});

// 使用resolve方法，就是把promise的状态设置fulfilled状态
// 使用reject方法，让Promise的状态设置为rejected状态
let promise2 = Promise.resolve(5);

// promise也可以像值、函数、参数、返回值对待
let promisePaymentAmount = Promise.resolve(50);

// 第一个then中的值作为第二个then函数中的值
// 调用then的时候就是可以使用promise的值了，这时候实际上promise的状态已经定下来了
promisePaymentAmount.then(amount => {
    amount *= 1.25;
    console.log('amount*1.25: ', amount);
    return amount;
}).then(amount => {
   console.log('amount: ', amount);
    return amount;
});


// then在reject之后调用
let promiseIntro = new Promise(function(resolve, reject){
    setTimeout(() => reject('error demo'),2000);
});
promiseIntro.then(null, error => console.log(error));

// promise链式的catch方法
var p = Promise.resolve(5);
p.then((value) => console.log('Value:', value))
.then(()=> {throw new Error('error in second handler')})
.catch((error) => console.log('Error: ' + error.toString()));

// 处理多个promise
var load1 = new Promise((resolve, reject)=>{
    setTimeout(()=> resolve(110), 1000);
});

var load2 = new Promise((resolve, reject)=>{
    setTimeout(()=> resolve(120), 2000);
});

var load3 = new Promise((resolve, reject)=>{
    reject('Bankrupt');
});

Promise.all([load1, load2, load3]).then(value=>{
    console.log(value);
}, reason=>{
    console.log(reason);
});