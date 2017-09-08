/**
 * Created by Darren on 2017/9/8.
 */
let firstElement = {order:1}, secondElement={order:2};
let wm = new WeakMap();

wm.set(firstElement, 1);
wm.set(secondElement,{});

wm.get(secondElement);