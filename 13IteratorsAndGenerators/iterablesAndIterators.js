/**
 * Created by Darren on 2017/9/8.
 */
//ES6有一个iterable protocol,定义了javascript遍历对象的行为。iterable object有一个iterator方法

// iterator object有一个next方法，返回下一个元素，模拟如下
let iteratorObject ={
    next(){
        return {
          done: true,
          value:null
        };
    }
};

//创建一个有关倒计时的iterator object
let countdownIterator={
    countdown:10,
    next(){
        this.countdown-=1;
        return {
            done: this.countdown===0,
            value:this.countdown
        };
    }
};

//创建一个iterable object,里面有iterator方法
let countdownIterable = {
    [Symbol.iterator](){
        return Object.assign({}, countdownIterator);
    }
};

//iterable object中获取iterator
let iterator = countdownIterable[Symbol.iterator]();