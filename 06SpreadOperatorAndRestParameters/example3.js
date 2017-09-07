/**
 * Created by Darren on 2017/9/7.
 */
function sumArgs(...numbers){
    return numbers.reduce((sum, num)=>{
        console.log('(sum, num):', sum, num);
        return sum+num;
    },0);
}

console.log(sumArgs(2,3,4,5));