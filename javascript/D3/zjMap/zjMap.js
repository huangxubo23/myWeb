var w = 1000;
var h = 1000;

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
    .translate([w / 5, h / 2]);


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

var mapColor = d3.scale.quantize()
    .range(["rgb(237,248,233)", "rgb(186,228,179)", "rgb(116,196,118)", "rgb(49,163,84)", "rgb(0,109,44)"]);

//③=====读取文件并绘制=====
d3.json("zhe_jiang_geo.json", function(error, root) {
    if (error) {
        return console.error(error);
    } else {
        //console.log(root.features);

        mapColor.domain([0, 11]);

        svg.selectAll("path")
            .data(root.features)
            .enter()
            .append("path")
            .attr("stroke", "#000")
            .attr("stroke-width", 1)
            .attr("fill", function(d, i) {
                return mapColor(i);
            })
            .attr("d", path)
            .on("mouseover", function(d, i) {
                d3.select(this)
                    .attr("fill", "yellow");
            })
            .on("mouseout", function(d, i) {
                d3.select(this)
                    .attr("fill", mapColor(i));
            });

        svg.selectAll("circle")
            .data(root.features)
            .enter()
            .append("circle")
            .attr("cx", function(d, i) {
                return projection(d.properties.cp)[0];
            })
            .attr("cy", function(d, i) {
                return projection(d.properties.cp)[1];
            })
            .attr("r", 3)
            .style("fill", "#555")
            .style("opacity", 0.75);

        svg.selectAll("text")
            .data(root.features)
            .enter()
            .append("text")
            .attr("x", function(d, i) {
                return projection(d.properties.cp)[0];
            })
            .attr("y", function(d, i) {
                return projection(d.properties.cp)[1];
            })
            .attr("font-size", 16)
            .attr("font-family", "microsoft yahei")
            .text(function(d, i) {
                return d.properties.name;
            });

        var rootData = root.features;
        var length = rootData.length;

        if (length > 0) {
            for (var i = 0; i < length; i++) {
                var data = rootData[i].properties.cp;

                //随机数
                var dataset = [];
                for (var a = 0; a < 5; a++) {
                    var tempnum = Math.floor(Math.random() * 50);
                    dataset.push(tempnum);
                }
                rootData[i].properties.dataset = dataset;


            } 
        }

        var dt = rootData;
        var dtSet = [15, 26, 43, 22, 17];
        var pie = d3.layout.pie();
        var arc = d3.svg.arc()
            .innerRadius(10)
            .outerRadius(50);
        var pieColor = d3.scale.category10();

        for (var b = 0; b < dt.length; b++) {
            var pieData = dt[b];
            var xValue = projection(pieData.properties.cp)[0];
            var yValue = projection(pieData.properties.cp)[1];
            var pieDataset = pieData.properties.dataset;

            var newSvg = svg.append("svg")
            .attr("x", function () {
                var x = xValue-50;
                return x;
            })
            .attr("y", function () {
                var y = yValue-50;
                return y;
            });

            var arcs = newSvg.selectAll("g")
                .data(pie(pieDataset))
                .enter()
                .append("g")
                .attr("transform", "translate(50,50)");
            //.attr("transform", "translate(" + 50 + "," + 100 + ")");

            arcs.append("path")
                .attr("fill", function (k, n) {
                    return pieColor(n);
                })
                //.attr("d", arc)
                .attr("d", function (k, n) {
                    return arc(k);
                })
                .on("mouseover", function (k, n) {
                    d3.select(this)
                        .attr("fill", "blue");
                })
                .on("mouseout", function (k, n) {
                    d3.select(this)
                        .attr("fill", pieColor(n));
                });
        }

        //var newSvg = svg.append("svg")
        //    //.attr("width", 200)
        //    //.attr("height",200)
        //    .attr("x", function() {
        //        var x = 288.3286249999983 - 100;
        //        return x;
        //    })
        //    .attr("y", function() {
        //    var y = 332.5222249136623 - 100;
        //        return y;
        //    });

        //var arcs = newSvg.selectAll("g")
        //    .data(pie(dtSet))
        //    .enter()
        //    .append("g")
        //    .attr("transform", "translate(50,50)");
        //    //.attr("transform", "translate(" + 50 + "," + 100 + ")");

        //arcs.append("path")
        //    .attr("fill", function(k, n) {
        //        return pieColor(n);
        //    })
        //    //.attr("d", arc)
        //    .attr("d", function(k, n) {
        //        return arc(k);
        //    })
        //    .on("mouseover", function(k, n) {
        //        d3.select(this)
        //            .attr("fill", "blue");
        //    })
        //    .on("mouseout", function(k, n) {
        //        d3.select(this)
        //            .attr("fill", pieColor(n));
        //    });


    }
});






