/**
 * Created by Darren on 2017/9/7.
 */
class  C{

    //��̬������Ҫ��������
    static create(){
        return new C();
    }

    constructor(){
        console.log("c constructor");
    }
}


var c = C.create();