/**
 * Created by Darren on 2017/9/8.
 */
var map = new Map();
map.set("2-1","foo");
map.set("0-1","bar");
console.log(map);
var mapAsc = new Map([...map.entries()].sort());
console.log(mapAsc);