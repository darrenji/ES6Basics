/**
 * Created by Darren on 2017/9/7.
 */
(function(){
    console.log(arguments);
})(1, 'second',3);

//...args��Χ�����Ų�����
((...args) => {console.log(args)})(1, 'second',3);