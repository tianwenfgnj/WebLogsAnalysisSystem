"use strict"
const backColor = '#404a59';
$(document).ready(function () {

    //初始化 echarts
    let accessChart = echarts.init(document.getElementById("accessChartQuery"));
    let totalFlow = echarts.init(document.getElementById("totalFlowQuery"));
    let totalIP = echarts.init(document.getElementById("totalIPQuery"));
    let IPRank= echarts.init(document.getElementById("IPRankQuery"));
    let URLRank= echarts.init(document.getElementById("URLRankQuery"));
    let PieChart = echarts.init(document.getElementById("PieChartQuery"));
    let SeqChart = echarts.init(document.getElementById("flowSeqQuery"));
    let BarChart = echarts.init(document.getElementById("flowBarQuery"));
    let state = [];
    let method = [];
    $("#conditionQuery").click(function () {
        let courtData = $("#courtSelect").val();
        let dateBegin = $("#calendarBegin").val();
        //构造Json格式的数据
        let jsonData = "{\"dateBegin\":" + "\""+dateBegin +"\""  +  ",\"courtList\":" + JSON.stringify(courtData) + "}";
    //     $.ajax({
    //         url: "/conditionQuery.action",
    //         type:"post",
    //         dataType: "json",
    //         data: jsonData,
    //         success: function(data){
    //             console.log("success");
    //             drawNumChart(accessChart, data.ReqSum, "总访问次数(/次)");
    //             drawNumChart(totalFlow, data.TotalBytes, "总流量(/MB)");
    //             drawNumChart(totalIP, data.iptotalNum, "IP总数");
    //             let IPList = convertJsonToArray(data.IPList);
    //             let URLList = convertJsonToArray(data.URLList);
    //             state= convertJsonToArray(data.stateList);
    //             method = convertJsonToArray(data.methodList);
    //             console.log("IPlist:" + IPList.length);
    //             drawRankChart(IPRank, IPList, "IP访问排行", color1);
    //             drawRankChart(URLRank, URLList, "URL访问排行", color2);
    //             let methodName = method.map(function (methodItem) {
    //                 return methodItem[0];
    //             });
    //             let methodData = method.map(function (methodDataItem) {
    //                 return {name: methodDataItem[0], value: methodDataItem[1]}
    //             });
    //             let stateName = state.map(function (methodItem) {
    //                 return methodItem[0];
    //             });
    //             let stateData = state.map(function (methodDataItem) {
    //                 return {name: methodDataItem[0], value: methodDataItem[1]}
    //             });
    //             drawPieChart(PieChart,methodName,  methodData, stateName, stateData);
    //
    //             let BytesSec = convertJsonToArray(data.BytesSecList);
    //             let ReqSec = convertJsonToArray(data.ReqSecList);
    //             drawSeqChart(SeqChart, BytesSec, ReqSec);
    //         }
    //     });
    });
    let timeData = [ '2009/6/12 2:00', '2009/6/12 3:00'];
    timeData = timeData.map(function (str) {
        return str.replace('2009/', '');
    });
    let BarData = [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133, 334, 198, 123, 125, 220];
    let rankData = [];
    let color1 = ['red', 'orange', 'yellow', 'green', 'cyan', 'yellow', 'green', 'blue', 'purple', 'red', 'orange', 'cyan', 'blue', 'purple'];
    let color2 = ['green', 'blue', 'purple', ' red', 'orange', 'green', 'red', 'cyan', 'yellow', 'green', 'blue', 'purple', 'red', 'purple'];
    let data = 0;

    //画默认状态图
    drawNumChart(accessChart, data, "总次数(/次)");
    drawNumChart(totalFlow, data, "总流量( /MB)");
    drawNumChart(totalIP, data, "IP总数");
    drawSeqChart(SeqChart, [], []);
    drawRankChart(URLRank, rankData, "URL访问排行(TOP 10)", color1);
    drawRankChart(IPRank, rankData, "IP访问排行(TOP 10)", color2);
    drawPieChart(PieChart,"",  "", "", "");
    drawBarChart(BarChart, BarData);
});