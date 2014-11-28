var gsData = [
    { year: "2003", type: "外商投资企业和外国企业所得", value: "1348113.49" },
    { year: "2004", type: "外商投资企业和外国企业所得", value: "9044119.87" },
    { year: "2005", type: "外商投资企业和外国企业所得", value: "7101600.31" },
    { year: "2006", type: "企业所得税", value: "2142448.02" },
    { year: "2006", type: "外商投资企业和外国企业所得", value: "110001.33" },
    { year: "2007", type: "企业所得税", value: "1748534.64" },
    { year: "2007", type: "外商投资企业和外国企业所得", value: "62569.14" },
    { year: "2008", type: "企业所得税", value: "2392337.53" },
    { year: "2009", type: "企业所得税", value: "1280157.8" },
    { year: "2011", type: "企业所得税", value: "721874475" },
    { year: "2011", type: "消费税", value: "1006754754.18" },
    { year: "2011", type: "增值税", value: "688718267.04" },
    { year: "2012", type: "企业所得税", value: "135596382.56" },
    { year: "2012", type: "消费税", value: "2975233723.56" },
    { year: "2012", type: "增值税", value: "940013501.6" },
    { year: "2013", type: "企业所得税", value: "10772660.43" },
    { year: "2013", type: "消费税", value: "2861453595.3" },
    { year: "2013", type: "增值税", value: "176872209.97" },
    { year: "2014", type: "企业所得税", value: "24137255.82" },
    { year: "2014", type: "消费税", value: "964562439.49" },
    { year: "2014", type: "增值税", value: "328493814.58" }
];

$(document).ready(function() {
    var length = gsData.length;
    var tableTr = "";
    if (length > 0) {
        var year 
        for (var i = 0; i < length; i++) {
            var tableData = gsData[i];
            var trStr = '<tr><td>' + tableData.year + '</td><td>' + tableData.type + '</td><td>' + tableData.value + '</td></tr>';
            tableTr += trStr;
        }
    }
    var gsTable = $(
        '<table>'
        + '<tr><th>缴税年度</th><th>税种名称</th><th>相应税种缴税情况</th></tr>'
        + tableTr
        +'</table>');
    $("#shuoshuiTable").html(gsTable);
})