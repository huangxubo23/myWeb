var Time = function() {
    this.date = "";
    this.getTime = function() {
        var dt = new Date();
        var year = dt.getFullYear();
        var month = dt.getMonth() + 1;
        month = month < 10 ? "0" + month : month;
        var day = dt.getDate();
        day = day < 10 ? "0" + day : day;
        var dateStr = year + "-" + month + "-" + day;
        this.date = dateStr;
        return dateStr;
    };
    this.changeTimeFormat = function () {
        if (!this.date) {
            this.date = this.getTime();
        }
        var dateArr = this.date.split("-");
        return dateArr.join("/");
    };
}
var time = new Time();

function getDate(num) {
    if (num === 0) {
        alert(time.getTime());
    }else if (num === 1) {
        alert(time.changeTimeFormat());
    }
}
