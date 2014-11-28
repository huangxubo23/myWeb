var width = 600;
var height = 600;

var dataset = [30, 10, 43, 55, 13];

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);

//数据转换
var pie = d3.layout.pie();

//绘制图形
var outerRadius = width / 2;
var innerRadius = width / 4;
var arc = d3.svg.arc()
    .innerRadius(innerRadius)
    .outerRadius(outerRadius);

var color = d3.scale.category10();
//var color = d3.scale.category20();

var arcs = svg.selectAll("g")
    .data(pie(dataset))
    .enter()
    .append("g")
    .attr("transform", "translate(" + outerRadius + "," + outerRadius + ")");

arcs.append("path")
    .attr("d", function(d) {
        return arc(d);
    })
    .attr("fill", function(d, i) {
        return color(i);
    });

arcs.append("text")
    .attr("transform", function(d) {
        return "translate(" + arc.centroid(d) + ")";
    })
    .attr("text-anchor", "left")
    .text(function(d) {
        return d.value;
    });
