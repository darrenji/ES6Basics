///**
// * Created by Darren on 2017/9/8.
// */
//
////����promsie��д��
//
//setTimeout(function(){
//    console.log('s')
//},1000)��
//
////ʹ��promise��д��
//
//var wait1000 = new Promise(function(resolve, reject){
//    setTimeout(resolve,1000);
//}).then(function(){
//        console.log("h");
//    })
//
//// ����ʹ��lambda���ʽ��ôд
//var wait1000 = new Promise((resolve, reject)=>{
//    setTimeout(resolve, 1000);
//}).then(()=>{
//        console.log("h");
//    });