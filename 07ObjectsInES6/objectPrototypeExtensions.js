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

// obj��ԭ��
console.log(Object.getPrototypeOf(obj));

//����obj��ԭ��
Object.setPrototypeOf(obj, proto);
obj.whoami();