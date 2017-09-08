/**
 * Created by Darren on 2017/9/8.
 */
var property = Symbol();
class  Sth{
    constructor() {
        this[property] = "test";
    }
}

var instance = new Sth();
console.log(instance.property);