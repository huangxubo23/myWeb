$.ajax({
    type: "get",
    //url: nstax.config.url.getOrganizationUrl,
    //url: "http://172.26.99.175:9090/tax/content/GetDeptList",
    url: "ProxyHandler.ashx?server=getOrganizationUrl",
    dataType: "json",
    beforeSend: function (XMLHttpRequest) {

    },
    data: {
        pageindex: pageIndex,
        pagesize: pageSize
    },
    success: function (json, textStatus) {
        if (json) {

        } else {
            nstax.main.common.dialogInfo("服务错误", "返回的数据为空或不合法，请检查。");
        }
    },
    complete: function (XMLHttpRequest, textStatus) {

    },
    error: function (e) {
        nstax.main.common.dialogInfo("网络错误");
    }
});


var companyObj = {
    COMPANYID: companyId,
    NAME: companyName,
    CORPORATION: corporation,
    CONTACT: contact,
    RECOMMEND: recommend,
    CREATEDATE: createDate,
    ADDRESS: address,
    URL: companyUrl,
    IMGURL: imgUrl,
    ABSTRACT: abstract,
    DESCRIPTION: companyIntroduce,
    BASEEDITTIME: baseEidtTime,
    DESEDITTIME: desEditTime
}
var companyInfo = JSON.stringify(companyObj);
$.post(
    "handler/CompanyHandler.ashx",
    {
        server: "UpdateCompanyInfo",
        companyInfo: companyInfo
    },
    function (result) {
        if (result == "True") {
            hideWin(1);
            loadCompanyHome();
            alert("提示：企业名片保存成功！");
        } else {
            alert("提示：企业名片保存失败！");
        }
    },
    "text"
);