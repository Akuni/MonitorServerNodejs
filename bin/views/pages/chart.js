var makeChart = function(tempArray) {

    var d = [];
    var l = [];
    for(var i = 0; i < tempArray.length; i++){
        d[i] = tempArray[i].value.substring(6,10);

        l[i] = new Date(tempArray[i].timestamp).toLocaleString();
    }

    Highcharts.chart('container', {
    title: {
        text: 'Temperature every 5 minutes',
        x: -20 //center
    },
    subtitle: {
        text: 'Source: Raspberry Pi',
        x: -20
    },
    xAxis: {
        categories: l
    },
    yAxis: {
        title: {
            text: 'Temperature (°C)'
        },
        plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
        }]
    },
    tooltip: {
        valueSuffix: '°C'
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
        borderWidth: 0
    },
    series: [{
        name: 'Temperature',
        data: d
    }]
});
}

module.exports = makeChart;