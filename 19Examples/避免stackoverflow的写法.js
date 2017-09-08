/**
 * Created by Darren on 2017/9/8.
 */


var list = readHigeList();
var nextListItem = function(){
    var item = list.pop();
    if(item){
        // 以下的写法会产生stack overflow，当集合很大的时候，因为都在stack行执行就会出现stack overflow
        nextListItem();

    //    以下的写法不会产生stack overlflow,因为放在了event queue中执行了
        setTimeout(nextListItem,0);
    }
}