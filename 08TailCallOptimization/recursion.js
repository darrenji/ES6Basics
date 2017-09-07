/**
 * Created by Darren on 2017/9/7.
 */
function sumToN(n, sum=0){
    if(n<=1) return sum;
    let result=sum+n;
    return sumToN(n-1,result);
}

console.time("recursion start")
console.log(sumToN(100));
console.time("recursion end")