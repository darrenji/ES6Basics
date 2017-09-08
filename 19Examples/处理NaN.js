/**
 * Created by Darren on 2017/9/8.
 */

// NaN说明一个值不是number

//一个匪夷所思的表象是，虽然NaN不是Number,但是当用typeof判断的时候，它却是number
console.log(typeof NaN === "number");

var a = NaN;
console.log(Number.isNaN(a));