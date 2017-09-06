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

//����Ǵ�ӡ����������ΪBall�е�this��setInterval�е�this�ǲ�һ���ġ�
//this��ȷ���ģ�������������

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

//���ǻ��뵽����bind����������

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

//��ʹ��lambda���ʽ��Ϊ���ǽ����������⣬�����ٿ���this��ָ��仯����

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

//��ϰ1

/*
var printHelloWorld = () => {console.log('Hello World');}
printHelloWorld();*/

//��ϰ2
/*
var arr=[1,2,3,4,5];
var sum = arr => arr.reduce((a,b)=>a+b,0);
console.log(sum(arr))*/

//��ϰ3
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

//����д��
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