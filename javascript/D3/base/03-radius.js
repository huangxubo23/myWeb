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
    .attr("fill", function(d, i) {
        return color(i);
    })
    //.attr("d", arc)
    .attr("d", function(d) {
        return arc(d);
    })
    .on("mouseover", function(d, i) {
        d3.select(this)
            .transition()
            .duration(300)
            .attr("d", function(d) {
                arc.outerRadius(width / 3);
                arc.innerRadius(0.00001);
                return arc(d);
            });
    })
    .on("mouseout",function(d, i) {
        d3.select(this)
            .transition()
            .duration(300)
            .attr("d", function(d) {
                arc.outerRadius(width / 4);
                arc.innerRadius(0.00001);
                return arc(d);
            });
    })
    .transition()
    .duration(1500)
    //.ease("bounce")
    .attr("d", function(d) {
        arc.outerRadius(width / 4);
        arc.innerRadius(0.00001);
        return arc(d);
    });

setTimeout(addText, 2000);
function addText() {
    arcs.append("text")
        .attr("transform", function(d) {
            return "translate(" + arc.centroid(d) + ")";
        })
        .attr("text-anchor", "center")
        .attr("font-size", 16)
        .attr("fill", "white")
        .text(function(d) {
            return d.value;
        });
}
