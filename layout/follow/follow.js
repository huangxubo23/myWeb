$(function () {
    $("#mapDiv").mousemove(function (e) {
        var pageX = e.pageX;
        var pageY = e.pageY;
        $("#float").css("left", pageX + 15).css("top", pageY + 15);
    });

    //获取元素的位置 
    function getLeft(obj) {
        if (obj == null)
            return null;
        var mendingObj = obj;
        var mendingLeft = mendingObj.offsetLeft;
        while (mendingObj != null && mendingObj.offsetParent != null && mendingObj.offsetParent.tagName != "BODY") {
            mendingLeft = mendingLeft + mendingObj.offsetParent.offsetLeft;
            mendingObj = mendingObj.offsetParent;
        }

        return mendingLeft;
    };
    function getTop(obj) {
        if (obj == null)
            return null;
        var mendingObj = obj;
        var mendingTop = mendingObj.offsetTop;
        while (mendingObj != null && mendingObj.offsetParent != null && mendingObj.offsetParent.tagName != "BODY") {
            mendingTop = mendingTop + mendingObj.offsetParent.offsetTop;
            mendingObj = mendingObj.offsetParent;
        }
        return mendingTop;
    }; 

    //获取鼠标的位置 
    function getMousePosition(event) {
        var position = {
            MouseX: 0,
            MouseY: 0
        }
        if (event.pageX != undefined) {
            position.MouseX = event.pageX;
            position.MouseY = event.pageY;
        } else {
            var target = EventUtil.getTarget(event);
            position.MouseX = event.offsetX + getLeft(target);
            position.MouseY = event.offsetY + getTop(target);

        }
        return position;
    }
});