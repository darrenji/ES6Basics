/**
 * Created by Darren on 2017/9/8.
 */
//��Sets��˵���������ջ��Ʋ��ܻ������е�ֵ
// wek sets�Ϳ���

let firstElement = {order:1}, secondElement={order:2};
let ws = new WeakSet([firstElement, secondElement]);

console.log(ws.has(firstElement));
