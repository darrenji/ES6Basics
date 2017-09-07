/**
 * Created by Darren on 2017/9/7.
 */
let baskets=[
    {
        firstName:'Andrew',
        email:'andrew@aol.com'
    },
    {
        email:'question@mark.com'
    },
    {
        firstName:'David',
        email:'david@spammail.com',
        basketValue:55
    }
];

//使用Object.assign方法构建新对象的默认值
var temp = baskets.map(item => Object.assign({firstName:'-',basketValue:0},item));
console.log(temp);