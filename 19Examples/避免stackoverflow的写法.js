/**
 * Created by Darren on 2017/9/8.
 */


var list = readHigeList();
var nextListItem = function(){
    var item = list.pop();
    if(item){
        // ���µ�д�������stack overflow�������Ϻܴ��ʱ����Ϊ����stack��ִ�оͻ����stack overflow
        nextListItem();

    //    ���µ�д���������stack overlflow,��Ϊ������event queue��ִ����
        setTimeout(nextListItem,0);
    }
}