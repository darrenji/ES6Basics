/**
 * Created by Darren on 2017/9/8.
 */

//���÷���
let target = function getArea(width, height){
    return `${ width * height }${this.units}`;
};

let thisValue = {units: 'cm'};

let args = [5,3];

var result1 = Reflect.apply(target, thisValue, args);
console.log(result1);

// ��������
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

// ����ԭ��
let classOfMyAccount = Reflect.getPrototypeOf(myAccount);

let newProto = {
    get contact(){
        return `${this.name}-555}`;
    }
};

Reflect.setPrototypeOf(myAccount, newProto);

//��ȡ����
Reflect.has(myAccount, 'name');
Reflect.has(myAccount, 'contact');

//��ȡ��������
Reflect.ownKeys(myAccount);

//��ȡ����ֵ
Reflect.get(myAccount, 'name');