/**
 * Created by Darren on 2017/9/8.
 */
var myObject = {
    foo: "i am in the outside",
    func: function(){
        var self = this;
        //这里的self 和this都指的是myObject
        console.log(this.foo);// i am in the outside
        console.log(self.foo);// i am in the outside
        (function(){
            console.log(this.foo);//undefined,this肯定不是myObject，因为这是一个完全独立的execution context
            console.log(self.foo);//i am in the outside,scope还存在，会通过outer environment或者说scope找到self变量
        }());
    }
};

myObject.func();