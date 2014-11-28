$(document).ready(function() {
    var jsonData = $.ajax({
        type: "get",
        //url: nstax.config.url.getOrganizationUrl,
        //url: "http://172.26.99.175:9090/tax/content/GetDeptList",
        url: "dishui.json",
        //dataType: "json",
        beforeSend: function(XMLHttpRequest) {

        },
        data: {

        },
        success: function(json, textStatus) {
            if (json) {
                console.log(json);
            }
        },
        complete: function(XMLHttpRequest, textStatus) {

        },
        error: function(e) {
            alert("失败");
        }
    });

});