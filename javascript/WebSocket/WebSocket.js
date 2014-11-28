var airQuaWebSocketUrl = "ws://192.168.200.125:55657";
$(document).ready(function () {
    var aqiQuaWebsocket = new WebSocket(airQuaWebSocketUrl);
    var timer = setInterval(setValue, 1000);
    function setValue() {
        $("#webSocketValue").html(aqiQuaWebsocket);
    }
});

