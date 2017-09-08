/**
 * Created by Darren on 2017/9/8.
 */
function foo(){
    return
    {
        bar: "hello"
    }
};

console.log(foo());

//以上不会打印出值，因为return语句不能单独成一行。