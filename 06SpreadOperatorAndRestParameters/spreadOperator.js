/**
 * Created by Darren on 2017/9/7.
 */
function sumArgs(){
    var result=0;
    for(var i=0;i<arguments.length;++i){
        result+=arguments[i];
    }
    return result;
}
console.log(sumArgs(1,2, 3,4,5));

//���ǣ���������������кܶ�Ļ������д���Ͳ����ˡ�

var arr=[];
for(var i=0;i<10;++i){
    arr[i]=Math.random();
}
console.log(sumArgs.apply(null, arr));

//������������Spread Operator
// spread operator���ַ���ת�����ַ�����

let spreadingStrings = 'hello';
let charArray=[...spreadingStrings];
console.log(charArray);

//spread operator�ڽ⹹�е�����
let notgood='not good'.split('');
let [,,,, ...good] = notgood;
console.log(good);

//spread operator��λ��һ��Ҫ�����һ�������򱨴�