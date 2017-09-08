/**
 * Created by Darren on 2017/9/8.
 */
function Traverse(p_element, p_callback){
    p_callback(p_element);
    var list = p_element.children;
    for(var i = 0; i < list.length;i++){
        Traverse(list[i], p_callback);
    }
}