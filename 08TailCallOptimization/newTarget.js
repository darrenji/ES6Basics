/*
/!**
 * Created by Darren on 2017/9/7.
 *!/
function MyConstructor(){
    console.log(new.target === MyConstructor, typeof  new.target);
    if(typeof new.target === 'function'){
        console.log(new.target.name);
    }
}

// 当使用new关键字创建对象实例的时候，new.target指向MyConstructor
new MyConstructor();

// 当使用构造函数创建对象的时候，new.target的值为undefined
MyConstructor();*/
