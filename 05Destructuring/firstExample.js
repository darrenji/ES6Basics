/**
 * Created by Darren on 2017/9/7.
 */
let user = {
    name: 'Ashley',
    email: 'ashley@ilovess2015.net',
    lessonSeen:[2,5,6,7,9],
    nextLesson:10
};

/*
// �Ѷ���ֵ��������ͬ���Ƶı���
let {email, nextLesson}=user;
console.log(email, nextLesson);

// �����鸳ֵ��������ͬ���Ƶı���
let [a,b] = [5,3];
console.log(a, b);

[a,b]=[a+1, b+1];
console.log(a,b);*/

//��һ������ֵ����ͬ�ı�����д��ͬһ��

let {name}={email, nextLesson}=user;
console.log(name);

//ֻ�ж���������ܱ��ṹ������
