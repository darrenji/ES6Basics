/**
 * Created by Darren on 2017/9/8.
 */
for(var i=0;i<5;i++){
    setTimeout(function(){
        console.log(i);
    }, i*1000);
}

//���ϲ������0 1 2 3 4����ΪsetTimeout��ŵ�event queue��ִ�У���ѭ�������󣬲Ż�ִ��event queue�У���ʱ��i��ֵ��5

for(var i=0;i<5;i++){
    (function(x){
        setTimeout(function(){
            console.log(x);
        }, x*1000)
    })(i);
}

//���ϣ��ڲ����������һ���հ�������setTimeout�Ͳ���ŵ�event queue��ȥִ����