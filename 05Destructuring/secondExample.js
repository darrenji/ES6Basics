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
// �ڲ����У��Ѷ���ֵ��������ͬ���Ƶı���
drawChart([],{chartType:1, days:60});