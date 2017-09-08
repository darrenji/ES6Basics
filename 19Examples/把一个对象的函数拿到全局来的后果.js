/**
 * Created by Darren on 2017/9/8.
 */
var hero = {
    name: 'darren',
    getName: function(){
        return this.name;
    }
};

var stoleGetName = hero.getName;
console.log(stoleGetName()); //undefined,因为把对象的函数拿到全局来了，在全局中不存在name变量

console.log(hero.getName());