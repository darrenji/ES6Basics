/**
 * Created by Darren on 2017/9/8.
 */

var globalVar = "xyz";

(function outerFunc(outerArg){
    var outerVar = "a";
    (function innerFunc(innerArg){
        var innerVar = "b";

        console.log("outerArg: " + outerArg);
        console.log("innerArg: " + innerArg);
        console.log("outerVar: " + outerVar);
        console.log("innerVar: " + innerVar);
        console.log("globalVar: " + globalVar);
    })(456);
})(123);