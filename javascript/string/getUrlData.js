var url = "http://item.taobao.com/item.htm?a=1&b=2&c=&d=xxx&e";

function getUrlData() {
    var data = url.split("?")[1];
    var param = data.split("&");
    //var length = param.length;
    var result = {};
    for (var i = 0, length = param.length; i < length; i++) {
        var d = param[i].split("=");
        result[d[0]] = d[1];
    }
    return result;
}

function showUrlData() {
    var data = getUrlData();
    console.log(data);
    document.getElementById('urlData').innerHTML = JSON.stringify(data);
}