/**
 * Created by Darren on 2017/9/8.
 */
var a={},
    b={key:'b'},
    c={key:'c'};

a[b] = 123;
a[c] = 456;

console.log(a[b]);//456

//���Ѷ�����Ϊkey��ʱ��javascript engine��ִ��stringify,���ж���ļ��ͱ����[object object],����a[b]��a[c]��һ���¡�