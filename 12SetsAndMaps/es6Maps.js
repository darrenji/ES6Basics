/**
 * Created by Darren on 2017/9/8.
 */
let horses = new Map();
horses.set(8, 'Chocolate');
horses.set(3, 'Filliphone');
console.log(horses);

//通过链式来写
let horses2 = new Map().set(8, 'Chocolate').set(3, 'Fillphone');

//通过构造函数，数组
let horses3 = new Map([[3, 'chocolate'],[8, 'fillphone']])

console.log(horses.size);
console.log(horses.has(3));
console.log(horses.get(3));
horses.delete(3);

//使用forEach遍历
horses.forEach((value, key) => {console.log(value,key)});


//使用for遍历
for(let [key, value] of horses){
    console.log(key, value);
}






















