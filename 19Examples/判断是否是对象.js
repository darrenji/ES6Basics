/**
 * Created by Darren on 2017/9/8.
 */

// nullҲ��һ������
var bar = null;
console.log(typeof bar === "object");

//�������Կ����Ƕ��󣬵����Ƕ���
var fn = function(){
    console.log("hell0");
};
console.log(typeof fn === "object");

//�����ж��Ƿ��Ƕ���ķ�ʽ
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}
var person = new Person("darren",38);
console.log((person !== null) && (typeof person === "object"));

// �����Ѻ���Ҳ��������Ļ�
console.log((person !== null) && (typeof person === "object") || typeof person == "function");

//����Ҳ�Ƕ���
var arr1 = [1,2];
console.log(typeof  arr1 === "object");

//�����������鿴���Ƕ���
console.log((person != null)&&(typeof person ==="object")&&(toString.call(person) !== "[object Array]"));
