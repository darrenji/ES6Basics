/**
 * Created by Darren on 2017/9/8.
 */
let horses = new Map();
horses.set(8, 'Chocolate');
horses.set(3, 'Filliphone');
console.log(horses);

//ͨ����ʽ��д
let horses2 = new Map().set(8, 'Chocolate').set(3, 'Fillphone');

//ͨ�����캯��������
let horses3 = new Map([[3, 'chocolate'],[8, 'fillphone']])

console.log(horses.size);
console.log(horses.has(3));
console.log(horses.get(3));
horses.delete(3);

//ʹ��forEach����
horses.forEach((value, key) => {console.log(value,key)});


//ʹ��for����
for(let [key, value] of horses){
    console.log(key, value);
}






















