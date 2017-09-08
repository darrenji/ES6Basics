/**
 * Created by Darren on 2017/9/8.
 */
//ES6��һ��iterable protocol,������javascript�����������Ϊ��iterable object��һ��iterator����

// iterator object��һ��next������������һ��Ԫ�أ�ģ������
let iteratorObject ={
    next(){
        return {
          done: true,
          value:null
        };
    }
};

//����һ���йص���ʱ��iterator object
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

//����һ��iterable object,������iterator����
let countdownIterable = {
    [Symbol.iterator](){
        return Object.assign({}, countdownIterator);
    }
};

//iterable object�л�ȡiterator
let iterator = countdownIterable[Symbol.iterator]();