/**
 * Created by Darren on 2017/9/8.
 */
//对Sets来说，垃圾回收机制不能回收其中的值
// wek sets就可以

let firstElement = {order:1}, secondElement={order:2};
let ws = new WeakSet([firstElement, secondElement]);

console.log(ws.has(firstElement));
