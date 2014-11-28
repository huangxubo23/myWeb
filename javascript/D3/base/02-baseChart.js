var width = 600;
var height = 600;
var dataset = [];
var num = 15;

for (var i = 0; i < num; i++) {
    var tempnum = Math.floor(Math.random() * 50);  //返回 0~49 整数
    dataset.push(tempnum);
}

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);

var xAxisScale = d3.scale.ordinal()
    .domain(d3.range(dataset.length))
    .rangeRoundBands([0, 500]);

var yAxisScale = d3.scale.linear()
    .domain([0, d3.max(dataset)])
    .range([500, 0]);

var xAxis = d3.svg.axis()
    .scale(xAxisScale)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(yAxisScale)
    .orient("left");

var xScale = d3.scale.ordinal()
    .domain(d3.range(dataset.length))
    .rangeRoundBands([0, 500], 0.05);

var yScale = d3.scale.linear()
    .domain([0, d3.max(dataset)])
    .range([0, 500]);

svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("x", function(d, i) {
        return 30 + xScale(i);
    })
    .attr("y", function(d, i) {
        return 50 + 500 - yScale(d);
    })
    .attr("width", function(d, i) {
        return xScale.rangeBand();
    })
    .attr("height", yScale)
    .on("mouseover", function(d, i) {
        d3.select(this)
            .transition()
		    .duration(200)
            .attr("fill", "orange");
    })
    .on("mouseout",function(d, i) {
        d3.select(this)
            .transition()
		    .duration(200)
            .attr("fill", "steelblue");
    })
    .on("click",function(d, i) {
        d3.select(this)
            .attr("fill", "green");
    })
    .attr("fill", "red")
    .transition() //启动转变效果
    .duration(1000)  //指定整个转变持续多少时间，单位为毫秒
    .ease("circle")  //指定转变的方式，常用的转变方式有：linear普通的线性变化,circle慢慢地到达变换的最终状态,elastic带有弹跳的到达最终状态,bounce在最终状态处弹跳几次
    .delay(1000)  //指定延迟的时间
    .attr("fill", "steelblue");
    
svg.selectAll("text")
    .data(dataset)
    .enter()
    .append("text")
    .attr("x", function(d, i) {
        return 30 + xScale(i);
    })
    .attr("y", function(d, i) {
        return 50 + 500 - yScale(d);
    })
    .attr("dx", function(d, i) {
        return xScale.rangeBand() / 3;
    })
    .attr("dy", 15)
    .attr("text-anchor", "begin")
    .attr("font-size", 14)
    .attr("fill", "white")
    .text(function(d, i) {
        return d;
    });

svg.append("g")
    .attr("class", "axis")
    .attr("transform", "translate(30,550)")
    .call(xAxis);

svg.append("g")
    .attr("class", "axis")
    .attr("transform", "translate(30,50)")
    .call(yAxis);