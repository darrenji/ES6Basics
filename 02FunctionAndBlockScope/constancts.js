/**
 * Created by Darren on 2017/9/6.
 */


/*
�����������¸�ֵ
const PI = 3.1415;
PI=3.14;*/

//����һ��Ҫ��ֵ
//const PI;

//����������ʱ��Ҫ������ǰ��

//��ϰ1

/*'use strict'

var guessMe1=1;
let guessMe2=2;

{
   try{
        console.log(guessMe1,guessMe2);//û�д�ӡ��������ΪguessMe2�����scope�д���tempory dead zone
   }catch(_){

   }

    let guessMe2=3;
    console.log(guessMe1,guessMe2);//1 3
}

console.log(guessMe1,guessMe2);//1 2

() =>{
    console.log(guessMe1); //����ӡ����Ϊû��ִ��
    var guessMe1=4;
    let guessMe2=5;
    console.log(guessMe1,guessMe2);//����ӡ����Ϊû��ִ��
};*/

//��ϰ2e

'use strict';

var guessMe1=1
let guessMe2=2;

{
    let guessMe2=3;
    console.log(guessMe1, guessMe2) //1 3
    console.log(guessMe1, guessMe2) //1 3
}

console.log(guessMe1, guessMe2);//1 2

(()=>{
    var guessMe1=5;
    let guessMe2=6;
    console.log(guessMe1);//5
    console.log(guessMe1, guessMe2); //5 6
})();

console.log(guessMe1, guessMe2);//1 2