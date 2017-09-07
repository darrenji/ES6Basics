/**
 * Created by Darren on 2017/9/7.
 */
let guessMyName = function fName(){};
let fName2=function(){};
let guessMyProperty={
    prop:1,
    methodName(){},
    get myProperty(){
        return this.prop;
    },
    set myProperty(prop){
        this.prop = prop;
    }
};

//获取函数名称
console.log(guessMyName.name);//fName
console.log(fName2.name);
console.log(guessMyProperty.methodName.name);//methodName
console.log(guessMyProperty.methodName.bind(this).name);

//获取到属性描述器
let propertyDescriptor = Object.getOwnPropertyDescriptor(guessMyProperty, 'myProperty');
console.log(propertyDescriptor.get.name);
console.log(propertyDescriptor.set.name);