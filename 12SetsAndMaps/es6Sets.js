/**
 * Created by Darren on 2017/9/8.
 */
/*let colors = new Set();
colors.add('red');
colors.add('green');
colors.add('red');
colors.delete('green');
console.log(colors);
console.log(colors.size);
console.log(colors.has('green'));*/

//forEach±éÀú
let moreColors = new Set(['red','blue','red']);
//moreColors.forEach(value => {console.log(value);})

//for±éÀú
for(let value of moreColors){
    console.log(value);
}
