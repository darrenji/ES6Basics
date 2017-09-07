/**
 * Created by Darren on 2017/9/7.
 */
class  C{

    //静态方法需要类来调用
    static create(){
        return new C();
    }

    constructor(){
        console.log("c constructor");
    }
}


var c = C.create();