/**
 * Created by Darren on 2017/9/7.
 */
let arr=[1,2,3,4,5];

let experimentObject={
    arr,
    [ arr ]:1,
    [ arr.length ]:2,
    [ {} ]:3
};

console.log(experimentObject);

//键可以是任何类型