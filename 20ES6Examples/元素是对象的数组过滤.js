/**
 * Created by Darren on 2017/9/8.
 */
var family = [{
    name: "jack",
    age: 26
},{
    name: 'sunny',
    age:27
}];

var result = family.filter(person => person.age>26);
console.log(result);