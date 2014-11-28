var data = '[{"map":{},"values":"[0,721874475,135596382.56,10772660.43,24137255.82]","tax_name":"企业所得税","taxs_situation":721874475,"s_guid":""},{"map":{},"values":"[0,1006754754.18,2975233723.56,2861453595.3,964562439.49]","tax_name":"消费税","taxs_situation":1006754754.18,"s_guid":""},{"map":{},"values":"[0,688718267.04,940013501.6,176872209.97,328493814.58]","tax_name":"增值税","taxs_situation":688718267.04,"s_guid":""}]';
$(document).ready(function() {
    var arrayStr = "[1,2,3,4,5.5]";
    var data = showData(arrayStr);
    alert(data);
});

function strToArray(arrayStr) {
    var dataArray = arrayStr.substring(1, arrayStr.length - 1).split(",");
    var length = dataArray.length;
    var array = [];
    for (var i = 0; i < length; i++) {
        var num = parseFloat(dataArray[i]);
        array.push(num);
    }
    return array;
}