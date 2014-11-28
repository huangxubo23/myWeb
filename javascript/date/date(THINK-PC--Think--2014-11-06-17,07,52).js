var Time = function() {
    this.date = "";
    this.getTime = function() {
        var dt = new Date();
        //获取年，getFullYear()返回4位的数字
        var year = dt.getFullYear();
        //获取月，月份比较特殊，0是1月，11是12月
        var month = dt.getMonth() + 1;
        //变成两位
        month = month < 10 ? "0" + month : month;
        //获取日
        var day = dt.getDate();
        day = day < 10 ? "0" + day : day;
        
        function checkNum(num) {
            var val = num < 10 ? "0" + num : num;
            return val;
        }
        var hour = checkNum(dt.getHours());
        var minute = checkNum(dt.getMinutes());
        var second = checkNum(dt.getSeconds());
        var dateStr = year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
        this.date = dateStr;
        return dateStr;
    };
    this.changeTimeFormat = function () {
        if (!this.date) {
            this.date = this.getTime();
        }
        //var dateArr = this.date.split("-");
        //return dateArr.join("/");
        return this.date.replace(/-/g, "/");
        
    };
}
var time = new Time();

//倒计时
Time.prototype.countDown=function(sec) {
    var cdTimer = setInterval(cdFn, 1000);

    function cdFn() {
        document.getElementById("countDown").innerHTML = (sec < 10 ? "0" + sec : sec) + "秒";
        sec--;
        if (sec < 0) {
            clearInterval(cdTimer);
            document.getElementById("countDown").innerHTML = "倒计时结束！";
        }
    }
}

var timer;
function getDate(num) {
    if (num === 0) {
        if (!timer) {
            timer = setInterval(nowTime, 1000);

            function nowTime() {
                document.getElementById("nowDate").innerHTML = time.getTime();
            }
        } else {
            return;
        }
    }else if (num === 1) {
        clearInterval(timer);
        timer = "";
    }
    else if (num === 2) {
        document.getElementById("changeDateFormat").innerHTML = time.changeTimeFormat();
    }else if (num === 3) {
        time.countDown(15);
    }
}
