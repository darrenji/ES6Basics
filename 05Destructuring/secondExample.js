/**
 * Created by Darren on 2017/9/7.
 */
let config = {
    chartType:0,
    bullColor:'green',
    bearColor:'red',
    days:30
};

function drawChart(data, {
    chartType=0,
    bullColor='green',
    bearColor='red',
    days=30
    }){
        console.log(chartType, bullColor, bearColor,days);
}

drawChart([],{});
// 在参数中，把对象赋值给具有相同名称的变量
drawChart([],{chartType:1, days:60});