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
console.log(stoleGetName()); //undefined,��Ϊ�Ѷ���ĺ����õ�ȫ�����ˣ���ȫ���в�����name����

console.log(hero.getName());