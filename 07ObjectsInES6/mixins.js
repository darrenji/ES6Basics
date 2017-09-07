/**
 * Created by Darren on 2017/9/7.
 */
let hourse = {
    horseName:'QuckBucks',
    toString: function(){
        return this.horseName;
    }
};

let rider = {
    riderName: 'Frank',
    toString:function(){
        return this.riderName;
    }
};

let horseRiderStringUtility = {
    toString: function(){
        return this.riderName + ' on ' + this.horseName;
    }
};

let racer = Object.assign({}, hourse, rider, horseRiderStringUtility);

console.log(racer.toString());

//Object.assignµÄÓÃ·¨