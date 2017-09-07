/**
 * Created by Darren on 2017/9/7.
 */

// 以前这样判断

/*
function addCalendarEntry(event, date, len, timeout) {
    date = typeof date ==='undefined'?new Date().getTime():date;
    len = typeof len=='undefined'?60:len;
    timeout=typeof  timeout==='undefined'?1000:timeout;
}*/

// 还可以这么写

/*
function addCalendarEntry(event, date, len, timeout){
    date = date || new Date().getTime();
    len = len||60;
    timeout=timeout||1000;
}*/

// 到了ES6就可以这么写了

/*
function addCalendarEntry(
    event,
    date=new Date().getTime(),
    len=60,
    timeout=1000){}*/

// 1

/*
function executeCallback(callback, dealay=1000){
    setTimeout(callback, dealay);
}

executeCallback(()=>console.log('done'));*/

// 2

/*
let lineNumber=1;
function printComment(comment, line=lineNumber++){
    console.log(line, comment);
}

printComment("hello");
printComment("world");*/

// 3

/*
let lineNumber=0;
let getLineNumber=function(){
    lineNumber+=1;
    return lineNumber;
}

function printComment(comment, line=getLineNumber())
{
    console.log(line, comment);
}

printComment('first');
printComment('second');*/

// 4


/*function argList(productName, price = 100) {
    console.log(arguments.length);
    console.log(productName===arguments[0]);
    console.log(price===arguments[1]);
}

argList("product1")*/

