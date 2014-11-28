var width = 500;
var height = 500;
var hSvg = d3.select("body").select("#leftDiv").append("svg")
    .attr("width", width)
    .attr("height", height);

var dataset = [30, 20, 45, 12, 21];

//比例尺
var xScale = d3.scale.linear()  //d3.scale.linear() 用于生成一个线性函数的比例尺
    .domain([0, d3.max(dataset)])
    .range([0, 450]);

//坐标轴
var axis = d3.svg.axis()  //d3.svg.axis() 一个坐标轴的函数
    .scale(xScale)  //指定用于坐标轴的比例尺
    .orient("bottom");  //指定坐标轴的分割点和数字的朝向,bottom,top,left,right

hSvg.append("g")
    .attr("class", "axis")
    .attr("transform", "translate(10,160)")  //transform 属性用于移动坐标轴在 svg 绘制框中的位置。
    .call(axis);

hSvg.selectAll("rect")  //表示在 <svg> 中选择所有的 <rect> 元素，但是实际上这时候 <svg> 中还不存在 <rect> 元素。这是 D3 一个比较特殊的地方，即它能够选择一个空集。
    .data(dataset)
    .enter()  // enter() 表示当所需要的元素（ <rect> ）比绑定的数据集合的元素（ dataset  ）少时，自动添加位置，使得与数据集合的数量一样多。
    .append("rect")
    .attr("x", 10)
    .attr("y", function(d, i) {
        return i * 30;
    })
    .attr("width", xScale)
    .attr("height", 28)
    .attr("fill", "blue")
    .on("mouseover", function(d, i) {
        d3.select(this)
            .attr("fill", "red")
            .text(d);
    })
    .on("mouseout", function(d, i) {
        d3.select(this)
            .attr("fill", "blue");
    });

var vSvg = d3.select("#rightDiv").append("svg")
    .attr("width", width)
    .attr("height", height);

vSvg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("y", 10)
    .attr("x", function(d, i) {
        return i * 30;
    })
    .attr("height", function (d, i) {
        return d * 10;
    })
    .attr("width", 28)
    .attr("fill", "green");


var dataArray = [
    [30, 20],
    [52, 2],
    [90, 11]
];
var result = d3.max(dataArray, function (d) {
    return d[1];  //20
});

var scale = d3.scale.linear();
scale.domain([0.000000001, 19.888888888811])
    .range([0, 100])
    .nice();
var result1 = scale(19);
//alert(result1);

//scale.domain([0, 20, 40])
//    .range([0, 100, 150]);
//alert(scale(3));
