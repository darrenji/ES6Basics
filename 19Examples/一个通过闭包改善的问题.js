/**
 * Created by Darren on 2017/9/8.
 */
for(var i=0;i<5;i++){
    setTimeout(function(){
        console.log(i);
    }, i*1000);
}

//以上不会产生0 1 2 3 4，因为setTimeout会放到event queue中执行，当循环结束后，才会执行event queue中，这时候i的值是5

for(var i=0;i<5;i++){
    (function(x){
        setTimeout(function(){
            console.log(x);
        }, x*1000)
    })(i);
}

//以上，内部函数会产生一个闭包，这样setTimeout就不会放到event queue中去执行了