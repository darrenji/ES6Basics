///**
// * Created by Darren on 2017/9/8.
// */
//
////不用promsie的写法
//
//setTimeout(function(){
//    console.log('s')
//},1000)；
//
////使用promise的写法
//
//var wait1000 = new Promise(function(resolve, reject){
//    setTimeout(resolve,1000);
//}).then(function(){
//        console.log("h");
//    })
//
//// 或者使用lambda表达式这么写
//var wait1000 = new Promise((resolve, reject)=>{
//    setTimeout(resolve, 1000);
//}).then(()=>{
//        console.log("h");
//    });