/**
 * Created by Darren on 2017/9/8.
 */
// promise��ʾ�첽�����Ľ��������һ�������ܴ����ֵ
// promise����״̬�ģ�pending, fulfilled, rejected

let promise1 = new Promise(function(resolve, reject){
    // call resolve(value)������һ��promise
    // call reject(reason)�ܾ�һ��promise
});

// ʹ��resolve���������ǰ�promise��״̬����fulfilled״̬
// ʹ��reject��������Promise��״̬����Ϊrejected״̬
let promise2 = Promise.resolve(5);

// promiseҲ������ֵ������������������ֵ�Դ�
let promisePaymentAmount = Promise.resolve(50);

// ��һ��then�е�ֵ��Ϊ�ڶ���then�����е�ֵ
// ����then��ʱ����ǿ���ʹ��promise��ֵ�ˣ���ʱ��ʵ����promise��״̬�Ѿ���������
promisePaymentAmount.then(amount => {
    amount *= 1.25;
    console.log('amount*1.25: ', amount);
    return amount;
}).then(amount => {
   console.log('amount: ', amount);
    return amount;
});


// then��reject֮�����
let promiseIntro = new Promise(function(resolve, reject){
    setTimeout(() => reject('error demo'),2000);
});
promiseIntro.then(null, error => console.log(error));

// promise��ʽ��catch����
var p = Promise.resolve(5);
p.then((value) => console.log('Value:', value))
.then(()=> {throw new Error('error in second handler')})
.catch((error) => console.log('Error: ' + error.toString()));

// ������promise
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