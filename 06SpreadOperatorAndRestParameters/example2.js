let f = ()=>[..."12345"];
let A = f().map(f);
console.log(A);

let nullVector = () => new Array(10).fill(null);
let nullArray = nullVector().map(nullVector);
console.log(nullArray);