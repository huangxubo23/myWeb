var userConfig= {
    width: "500px",
    height: "100px",
    fontSize: "20px",
    textAlign: "center",
    fontFamily: "microsoft yahei",
    border: "1px solid green",
    color: "#555",
    backgroundColor: "#f1f1f1"
}

$(document).ready(function() {
    for (var item in userConfig) {
        $("#userDiv").css(item, userConfig[item]);
    }
});