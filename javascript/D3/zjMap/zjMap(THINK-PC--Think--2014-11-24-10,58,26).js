var w = 800;
var h = 500;

//①=====设定投影函数=====

/*
 *由于 GeoJSON 文件中的地图数据，都是经度和纬度的信息，它们都是三维的。
 *要在网页上显示的是二维的，所以要设定一个投影函数来转换经度纬度。
 *关于各种投影方式的函数，可以参考：  https://github.com/mbostock/d3/wiki/Geo-Projections
 */
//center() 函数是用于设定地图的中心位置，[107,31] 指的是经度和纬度。
//scale() 函数用于设定放大的比例。
//translate() 函数用于设定平移。
var projection = d3.geo.mercator()
    .center([119, 29])
    .scale(59850)
    .translate([w / 2, h / 2]);


//②=====设定path函数=====
var path = d3.geo.path()
    .projection(projection);
/*
 *将上面的投影函数，作为参数，放入 path 中。这个 path 函数后面在绘制的时候就会用于转换经度纬度为平面信息，用于绘制。
 */


//③=====创建SVG元素=====
var svg = d3.select("body")
    .append("svg")
    .attr("width", w)
    .attr("height", h)
    .append("g")
    .attr("transform", "translate(0,0)");

var color = d3.scale.category20();

//③=====读取文件并绘制=====
d3.json("zhe_jiang_geo.json", function(error, root) {
    if (error) {
        return console.error(error);
    } else {
        //console.log(root.features);
        svg.selectAll("path")
            .data(root.features)
            .enter()
            .append("path")
            .attr("stroke", "#000")
            .attr("stroke-width", 1)
            .attr("fill", function(d, i) {
                return color(i);
            })
            .attr("d", path)
            .on("mouseover", function(d, i) {
                d3.select(this)
                    .attr("fill", "yellow");
            })
            .on("mouseout", function(d, i) {
                d3.select(this)
                    .attr("fill", color(i));
            });
    }
});






