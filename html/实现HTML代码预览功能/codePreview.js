function trestart() {
    if (script) {
        clear = confirm("确定要清除吗？", '');
        if (clear) {
            document.script.reset();
            document.script.value = "";
        }
    }
}
function test() {
    {
        temp = document.script.tester.value;
        testwin = open("", "testwin", "status=no,menubar=yes,toolbar=no");
        testwin.document.open();
        testwin.document.write(temp);
        testwin.document.close();
    }
}
function about() {
    alert("HTML代码直接显示出页面来");
}
function help() {
    OpenWindow = window.open("", "newwin", "height=220,width=470,toolbar=no,scrollbars=" + scroll + ",menubar=no");
    OpenWindow.document.write("<body bgcolor='white' text='black' alink='blue'vlink='blue' link='blue'><TITLE>帮助信息</TITLE>");
    OpenWindow.document.write("<center>你只要把你想显示的代码放到上页的输入框中，你自己也可以写代码，按显示键就能显示你的页面内容</center><br>");
    OpenWindow.document.write("<center><a href='mailto:87003056@163.com' target='main'>写信给我</a></Center><br>");
    OpenWindow.document.write("<center><a href='javascript:close()'>关闭本窗口</a></Center>");
    OpenWindow.document.close();
    self.name = "main";
}