var dciMap = (function() {
    var map;

    //显示地图
    var showMap = function(str) {

    };

    //显示地图缩放条
    var showScaleTool = function(position, strType) {

    };

    //显示鹰眼图
    var showOverViewMap = function(position, isOpen) {

    };

    //显示比例尺
    var showScalebar = function(positon, strType) {
        
    }

    //显示标注
    var showMarker = function(array, type) {

        var showInfoWindow = function(num) {

        };
    };

    //添加标注
    var addMarker = function(array, type) {

    };

    //====================生成代码=====================
    var mapConfig = { map: { key: "67bd734bd2ef5e5ccecfeccbb5a221ee", id: "MapContent", center: { x: 116.395645, y: 39.929986 }, city: "北京市", level: 12, width: 697, height: 550, minWidth: 100, minHeight: 100, maxWidth: 697, maxHeight: 550 }, event: { dra: 1, scr: 1, dou: 1, key: 1 }, control: { nav: { self: 1, style: "LARGE", place: "TOP_LEFT" }, ove: { self: 1, style: 1, place: "BOTTOM_RIGHT" }, sca: { self: 1, style: "METRIC", place: "BOTTOM_LEFT"}} };
    var userConfig = { map: { key: "", id: mapConfig.map.id, center: mapConfig.map.center, city: mapConfig.map.city, level: mapConfig.map.level, width: mapConfig.map.width, height: mapConfig.map.height, minWidth: mapConfig.map.minWidth, minHeight: mapConfig.map.minHeight, maxWidth: mapConfig.map.maxWidth, maxHeight: mapConfig.map.maxHeight }, event: { dra: mapConfig.event.dra, scr: mapConfig.event.scr, dou: mapConfig.event.dou, key: mapConfig.event.key }, control: { nav: { self: mapConfig.control.nav.self, style: mapConfig.control.nav.style, place: mapConfig.control.nav.place }, ove: { self: mapConfig.control.ove.self, style: mapConfig.control.ove.style, place: mapConfig.control.ove.place }, sca: { self: mapConfig.control.sca.self, style: mapConfig.control.sca.style, place: mapConfig.control.sca.place}} };
    
    function getSignCode() {
        var e = userConfig.map;
        var m = userConfig.event;
        var n = userConfig.control;
        var l = '<style type="text/css">\n    html,body{margin:0;padding:0;}\n    .iw_poi_title {color:#CC5522;font-size:14px;font-weight:bold;overflow:hidden;padding-right:13px;white-space:nowrap}\n    .iw_poi_content {font:12px arial,sans-serif;overflow:visible;padding-top:4px;white-space:-moz-pre-wrap;word-wrap:break-word}\n</style>\n';
        var t = showScaleTool();
        var k = showScaleTool();
        var _event_scr = 123,
            _event_dou = 123,
            _event_key = 123,
            q = addMarker(),
            _ctrl_ove = showOverViewMap(),
            _ctrl_sca = showScalebar(),
            h = 123,
            _sign_point = "    //标注点数组\n    var markerArr = [" + h + '];\n    //创建marker\n    function addMarker(){\n        for(var i=0;i<markerArr.length;i++){\n            var json = markerArr[i];\n            var p0 = json.point.split("|")[0];\n            var p1 = json.point.split("|")[1];\n            var point = new BMap.Point(p0,p1);\n			var iconImg = createIcon(json.icon);\n            var marker = new BMap.Marker(point,{icon:iconImg});\n			var iw = createInfoWindow(i);\n			var label = new BMap.Label(json.title,{"offset":new BMap.Size(json.icon.lb-json.icon.x+10,-20)});\n			marker.setLabel(label);\n            map.addOverlay(marker);\n            label.setStyle({\n                        borderColor:"#808080",\n                        color:"#333",\n                        cursor:"pointer"\n            });\n			\n			(function(){\n				var index = i;\n				var _iw = createInfoWindow(i);\n				var _marker = marker;\n				_marker.addEventListener("click",function(){\n				    this.openInfoWindow(_iw);\n			    });\n			    _iw.addEventListener("open",function(){\n				    _marker.getLabel().hide();\n			    })\n			    _iw.addEventListener("close",function(){\n				    _marker.getLabel().show();\n			    })\n				label.addEventListener("click",function(){\n				    _marker.openInfoWindow(_iw);\n			    })\n				if(!!json.isOpen){\n					label.hide();\n					_marker.openInfoWindow(_iw);\n				}\n			})()\n        }\n    }\n    //创建InfoWindow\n    function createInfoWindow(i){\n        var json = markerArr[i];\n        var iw = new BMap.InfoWindow("<b class=\'iw_poi_title\' title=\'" + json.title + "\'>" + json.title + "</b><div class=\'iw_poi_content\'>"+json.content+"</div>");\n        return iw;\n    }\n    //创建一个Icon\n    function createIcon(json){\n        var icon = new BMap.Icon("http://app.baidu.com/map/images/us_mk_icon.png", new BMap.Size(json.w,json.h),{imageOffset: new BMap.Size(-json.l,-json.t),infoWindowOffset:new BMap.Size(json.lb+5,1),offset:new BMap.Size(json.x,json.h)})\n        return icon;\n    }\n',
            _sign_line = addMarker(),
            _sign_text = addMarker(),
            a = 123;
        var htmlCode = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n<html xmlns="http://www.w3.org/1999/xhtml">\n<head>\n<meta http-equiv="Content-Type" content="text/html; charset=gb2312" />\n<meta name="keywords" content="百度地图,百度地图API，百度地图自定义工具，百度地图所见即所得工具" />\n<meta name="description" content="百度地图API自定义地图，帮助用户在可视化操作下生成百度地图" />\n<title>快速搭建系统Demo</title>\n<!--引用ArcGIS JS API 3.9版本-->\n<link rel="stylesheet" type="text/css" href="http://192.168.200.125/GisLib/js/dojo/dijit/themes/tundra/tundra.css"/>\n<link rel="stylesheet" type="text/css" href="http://192.168.200.125/GisLib/js/esri/css/esri.css"/>\n<script type="text/javascript" src="http://192.168.200.125/GisLib/Default.ashx"></script>\n' + l + '<script type="text/javascript" src="http://api.map.baidu.com/api?key=&v=1.1&services=true"><\/script>\n</head>\n\n<body>\n  <!--百度地图容器-->\n  <div style="width:' + e.width + "px;height:" + e.height + 'px;border:#ccc solid 1px;" id="dituContent"></div>\n</body>\n<script type="text/javascript">\n    //创建和初始化地图函数：\n    function initMap(){\n        createMap();//创建地图\n        setMapEvent();//设置地图事件\n        addMapControl();//向地图添加控件\n' + t + '    }\n    \n    //创建地图函数：\n    function createMap(){\n        var map = new BMap.Map("dituContent");//在百度地图容器中创建一个地图\n        var point = new BMap.Point(' + e.center.x + "," + e.center.y + ");//定义一个中心点坐标\n        map.centerAndZoom(point," + e.level + ");//设定地图的中心点和坐标并将地图显示在地图容器中\n        window.map = map;//将map变量存储在全局\n    }\n    \n    //地图事件设置函数：\n    function setMapEvent(){\n        " + k + "        " + _event_scr + "        " + _event_dou + "        " + _event_key + "    }\n    \n    //地图控件添加函数：\n    function addMapControl(){\n        " + q + "        " + _ctrl_ove + "        " + _ctrl_sca + "}\n    \n" + _sign_point + "" + _sign_line + "" + _sign_text + "    \n    " + a + "<\/script>\n</html>";
        return htmlCode;
    };

    var showSignCode = function() {
        var htmlCode = getSignCode();
        $("#htmlCode").val(htmlCode);
    };

    return {
        showMap: showMap,
        showScaleTool: showScaleTool,
        showOverViewMap: showOverViewMap,
        showScalebar: showScalebar,
        showMarker: showMarker,
        addMarker: addMarker,
        showSignCode: showSignCode
    }
})();