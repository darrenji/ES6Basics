/**
 * Created by Darren on 2017/9/8.
 */

//调用方法
let target = function getArea(width, height){
    return `${ width * height }${this.units}`;
};

let thisValue = {units: 'cm'};

let args = [5,3];

var result1 = Reflect.apply(target, thisValue, args);
console.log(result1);

// 创建对象
let target = class  Account{
  constructor(name, email){
      this.name = name;
      this.email = email;
  }

   get contact(){
       return `${this.name}<${this.email}}>`;
   }
};

let args = ['zsolt', 'info@zsotnagy.eu'];

let myAccount = Reflect.construct(target, args);
console.log(myAccount.contact);

// 操作原型
let classOfMyAccount = Reflect.getPrototypeOf(myAccount);

let newProto = {
    get contact(){
        return `${this.name}-555}`;
    }
};

Reflect.setPrototypeOf(myAccount, newProto);

//获取属性
Reflect.has(myAccount, 'name');
Reflect.has(myAccount, 'contact');

//获取所有属性
Reflect.ownKeys(myAccount);

//获取属性值
Reflect.get(myAccount, 'name');