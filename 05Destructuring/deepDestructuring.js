/**
 * Created by Darren on 2017/9/7.
 */
let user ={
    name:'Ashley',
    email: 'ashley@ilovees2015.net',
    lessonSeen:[2,5,6,7,9],
    nextLesson:10
};

let{
    lessonSeen:[
       first,
        second,
        third,
        fourth,
        fifth,
        sixth=null,
        seventh
    ],
    nextLesson: eighth
} = user;

console.log(first, second, third,fourth, fifth,sixth,seventh, eighth);