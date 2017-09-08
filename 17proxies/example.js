/**
 * Created by Darren on 2017/9/8.
 */
class Student {
    constructor(first, last, scores){
        this.firstName = first;
        this.lastName=last;
        this.testScores = scores;
    }

    get averate(){
        let average = this.testScores.reduce((a,b)=> a+b,0)/this.testScores.length;
        return average;
    }
}

let john = new Student('John', 'Dwan',[60,80,80]);

let johnProxy = new Proxy(john, {
    get: function(target, key, context){
        console.log(`john[${key}] was accessed`);
    }
});