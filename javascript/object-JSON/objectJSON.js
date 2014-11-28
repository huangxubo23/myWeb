var userConfig= {
    width: "500px",
    height: "100px",
    fontSize: "20px",
    textAlign: "center",
    fontFamily: "microsoft yahei",
    border: "1px solid green",
    color: "",
    backgroundColor: "#f1f1f1"
}

$(document).ready(function() {
    var obj = new Base();
    obj.show(function() {
        obj.showPrototype(obj);
    });
    
});

function Base() {
    this.show=function(callback) {
        for (var item in userConfig) {
            this.value = userConfig[item] || "blue";
            $("#userDiv").css(item, this.value);
        }
        callback();
    }
}

Base.prototype.showPrototype=function(obj) {
    var pHtml = JSON.stringify(obj);
    $("#prototypeDiv").html(pHtml);
}


