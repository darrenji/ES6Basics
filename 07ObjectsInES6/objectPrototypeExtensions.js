/**
 * Created by Darren on 2017/9/7.
 */
let proto={
    whoami(){console.log('I am proto');}
};

let obj = {
    whoami(){
        super.whoami();
        console.log('I am obj');
    }
};

// obj的原型
console.log(Object.getPrototypeOf(obj));

//设置obj的原型
Object.setPrototypeOf(obj, proto);
obj.whoami();