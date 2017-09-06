/**
 * Created by Darren on 2017/9/6.
 */

/*var Ball = function(x, y, vx, vy){
    this.x = x;
    this.y=y;
    this.vx=vx;
    this.vy=vy;
    this.dt=25;
    setInterval(function(){
        this.x+=vx;
        this.y+=vy;
        console.log(this.x, this.y);
    }, this.dt);
}

var ball= new Ball(0,0,1,1);*/

//结果是打印不出来。因为Ball中的this和setInterval中的this是不一样的。
//this不确定的，来解决这个问题

/*var Ball = function(x, y, vx, vy){
    this.x = x;
    this.y=y;
    this.vx=vx;
    this.vy=vy;
    this.dt=25;
    var self =this;
    setInterval(function(){
        self.x+=vx;
        self.y+=vy;
        console.log(self.x, self.y);
    }, this.dt);
}

var ball= new Ball(0,0,1,1);*/

//我们还想到了用bind解决这个问题

/*
var Ball = function(x, y, vx, vy){
    this.x = x;
    this.y=y;
    this.vx=vx;
    this.vy=vy;
    this.dt=25;
    setInterval(function(){
        this.x+=vx;
        this.y+=vy;
        console.log(this.x, this.y);
    }.bind(this), this.dt);
}

var ball= new Ball(0,0,1,1);*/

//而使用lambda表达式，为我们解决了这个问题，不用再考虑this的指向变化问题

/*var Ball=function(x,y,vx,vy){
    this.x=x;
    this.y=y;
    this.vx=vx;
    this.vy=vy;
    this.dt=25;
    setInterval(()=>{
        this.x+=vx;
        this.y+=vy;
        console.log(this.x,this.y);
    },this.dt);
}

b=new Ball(0,0,1,1);*/

//练习1

/*
var printHelloWorld = () => {console.log('Hello World');}
printHelloWorld();*/

//练习2
/*
var arr=[1,2,3,4,5];
var sum = arr => arr.reduce((a,b)=>a+b,0);
console.log(sum(arr))*/

//练习3
/*
var Entity = function(name,delay){
    this.name=name;
    this.delay=delay;
}

Entity.prototype.greet=function(){
    setTimeout(function(){
        console.log('hi, i am ' + this.name);
    }.bind(this),this.delay)
}

var java=new Entity('java',5000);
var cpp = new Entity('c++',30);

java.greet();
cpp.greet();*/

//换种写法
var Entity = function(name, delay){
    this.name=name;
    this.delay=delay;
}

Entity.prototype.greet=function(){
    setTimeout(()=>{
        console.log('hi, i am ' + this.name);
    },this.delay);
}

var java=new Entity('java',5000);
var cpp = new Entity('c++',30);

java.greet();
cpp.greet();