/**
 * Created by Darren on 2017/9/8.
 */
var myObject = {
    foo: "i am in the outside",
    func: function(){
        var self = this;
        //�����self ��this��ָ����myObject
        console.log(this.foo);// i am in the outside
        console.log(self.foo);// i am in the outside
        (function(){
            console.log(this.foo);//undefined,this�϶�����myObject����Ϊ����һ����ȫ������execution context
            console.log(self.foo);//i am in the outside,scope�����ڣ���ͨ��outer environment����˵scope�ҵ�self����
        }());
    }
};

myObject.func();