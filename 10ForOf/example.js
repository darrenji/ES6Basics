/**
 * Created by Darren on 2017/9/7.
 */
//1

/*
let message = 'hello';

for(let i in message){
    console.log(message[i]);
}*/

//2

/*
let message='hello';
for(let ch of message){
    console.log(ch);
}*/

//3

/*
let text = '\u{1F601}\u{1F43C}';
console.log('text: ', text);

for(let i in text){
    console.log(text[i]);
}

for(let c of text){
    console.log(c);
}*/

//4

let flights = [
    {source:'Dublin', destination:'warsaw'},
    {source:'New York', destination:'Phoenix'}
];

for(let {source, destination} of flights){
    console.log(source, destination);
}