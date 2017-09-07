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
// 把对象赋值给具有相同名称的变量
let {email, nextLesson}=user;
console.log(email, nextLesson);

// 把数组赋值给具有相同名称的变量
let [a,b] = [5,3];
console.log(a, b);

[a,b]=[a+1, b+1];
console.log(a,b);*/

//把一个对象赋值给不同的变量，写在同一行

let {name}={email, nextLesson}=user;
console.log(name);

//只有对象和数组能被结构到变量
