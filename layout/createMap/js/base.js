$(document).ready(function() {
    //showSignCode
    //showSignCode()
    
    //$("#htmlCode").val(html);
    /*$.ajax({
        type: "get",
        //url: nstax.config.url.getOrganizationUrl,
        //url: "http://172.26.99.175:9090/tax/content/GetDeptList",
        url: "demo.html",
        dataType: "html",
        beforeSend: function (XMLHttpRequest) {

        },
        data: {
            
        },
        success: function (json, textStatus) {
            if (json) {
                $("#htmlCode").val(json);
            } else {
                nstax.main.common.dialogInfo("服务错误", "返回的数据为空或不合法，请检查。");
            }
        },
        complete: function (XMLHttpRequest, textStatus) {

        },
        error: function (e) {
            nstax.main.common.dialogInfo("网络错误");
        }
    });*/

    dciMap.showSignCode();

    //SyntaxHighlighter.config.tagName = 'textarea';
    /*SyntaxHighlighter.config.strings = {

        expandSource: '展开代码',

        viewSource: '查看代码',

        copyToClipboard: '复制代码',

        copyToClipboardConfirmation: '代码复制成功',

        print: '打印',

        help: '?',

        alert: '语法高亮\n\n',

        noBrush: '不能找到刷子: ',

        brushNotHtmlScript: '刷子没有配置html-script选项',

        aboutDialog: '<div></div>'

    };*/
    SyntaxHighlighter.all();
});
