/**
 * Created by Darren on 2017/9/8.
 */
var arr1 = "john".split('');

//arr1��Ȼreverse�ˣ���ָ���arr1
var arr2 = arr1.reverse();
var arr3 = "jones".split('');

//���У�arr2�κεĲ������ı��arr2ָ������õ�ַ��arr2��arr1��ָ����һ����
arr2.push(arr3);

console.log('arr1');
console.log(arr1);
console.log('-------------')
console.log('arr2');
console.log(arr2);