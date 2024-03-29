﻿var w = 500;
var h = 300;


//定义地图投影-Define map projection
var projection = d3.geo.albersUsa()
    .translate([w / 2, h / 2])
    .scale([500]);

var path = d3.geo.path()
    .projection(projection);

var color = d3.scale.quantize()
    .range(["rgb(237,248,233)", "rgb(186,228,179)", "rgb(116,196,118)", "rgb(49,163,84)", "rgb(0,109,44)"]);

//创建SVG元素
var svg = d3.select("body")
    .append("svg")
    .attr("width", w)
    .attr("height", h);

//Load in agriculture data
d3.csv("us-ag-productivity-2004.csv", function(data) {

    //Set input domain for color scale
    color.domain([
        d3.min(data, function(d) { return d.value; }),
        d3.max(data, function(d) { return d.value; })
    ]);

    //Load in GeoJSON data
    d3.json("us-states.json", function (json) {
        //Merge the ag. data and GeoJSON
        //Loop through once for each ag. data value
        for (var i = 0; i < data.length; i++) {

            var dataState = data[i].state; //Grab state name
            var dataValue = parseFloat(data[i].value); //Grab data value, and convert from string to float

            //Find the corresponding state inside the GeoJSON
            for (var j = 0; j < json.features.length; j++) {

                var jsonState = json.features[j].properties.name;

                if (dataState == jsonState) {

                    //Copy the data value into the JSON
                    json.features[j].properties.value = dataValue;

                    //Stop looking through the JSON
                    break;

                }
            }
        }

        svg.selectAll("path")
            .data(json.features)
            .enter()
            .append("path")
            .attr("d", path)
            .style("fill", function(d) {
                var value = d.properties.value;
                if (value) {
                    return color(value);
                } else {
                    return "#ccc";
                }
            });

        //Load in cities data
        d3.csv("us-cities.csv", function(data) {
            svg.selectAll("circle")
                .data(data)
                .enter()
                .append("circle")
                .attr("cx", function(d) {
                    return projection([d.lon, d.lat])[0];
                })
                .attr("cy", function(d) {
                    return projection([d.lon, d.lat])[1];
                })
                .attr("r", function(d) {
                    return Math.sqrt((parseInt(d.population * 0.00004)));
                })
                .style("fill", "yellow")
                .style("opacity", 0.75);
        });
    });
});
