var config = {
    Number: 2,
    Boolean: true,
    Null: null,
    String: "My name is harry",
    Array: [1, 2, 3, 4, 5],
    Object: {
        Number: 5,
        Boolean: true,
        String: "My name is poney",
        Array: [1, 2, 3, 4, 5],
        ChildObj: {
            Number: 5,
            Boolean: true,
            String: "My name is peter"
        }
    }
}

$(document).ready(function () {
    var configStr = "var config = " + JSON.stringify(config);
    $("#test").html(configStr);

    common.cloneAll();
    common.cloneEach();
    common.changeObj();
    common.cloneNewObj();
});


//方法二：
/**
   * 克隆一个对象
   * @param Obj
   * @returns
   */
var Base = function() {
    this.cloneEach = function() {
        for (var e in config) {
            $("#testVal").append(JSON.stringify(config[e]));
            var cdata = cloneData(config[e]);
            console.log(cdata);
            $("#clone").append(JSON.stringify(cdata));
        }
    };
    this.cloneAll = function() {
        var addData = cloneData(config);
        console.log(addData);
        $("#cloneAll").html(JSON.stringify(addData));
    };
};

Base.prototype = {
    changeObj: function (oVal, nVal) {
        var newConfig = config;
        var defaultConfig = cloneData(config);
        config.Number = 5;
        console.log(defaultConfig);
        $("#assignment").append("原始的：" + JSON.stringify(defaultConfig) + "<br/>");
        console.log(newConfig);
        $("#assignment").append("新赋值的：" + JSON.stringify(newConfig));
    },
    cloneNewObj:function() {
        var newData = cloneData(config);
        console.log(newData);
        $("#cloneNew").html("新克隆的：" + JSON.stringify(newData));
    }
};

var common = new Base();

Base.prototype.cloneEach = function () {
    for (var e in config) {
        $("#testVal").append(JSON.stringify(config[e]) + "<br/>");
        var cdata = cloneData(config[e]);
        console.log(cdata);
        $("#clone").append(JSON.stringify(cdata) + "<br/>");
    }
}

function cloneData(Obj) {
    var buf;
    if (Obj instanceof Array) {
        buf = [];  //创建一个空的数组
        var i = Obj.length;
        while (i--) {
            buf[i] = cloneData(Obj[i]);
        }
        return buf;
    }else if (Obj instanceof Object) {
        buf = {};  //创建一个空对象
        for (var k in Obj) {  //为这个对象添加新的属性
            buf[k] = cloneData(Obj[k]);
        }
        return buf;
    } else {  //普通变量直接赋值
        return Obj;
    }
}

function changeData(Obj) {
    var buf;
    if (Obj instanceof Array) {
        buf = [];  //创建一个空的数组
        var i = Obj.length;
        while (i--) {
            Obj[i] = Obj[i] == 2 ? 5 : Obj[i]);
            changeData(Obj[i]);
        }
    } else if (Obj instanceof Object) {
        buf = {}; //创建一个空对象
        for (var k in Obj) { //为这个对象添加新的属性
            Obj[k] = (Obj[k] == 2 ? 5 : Obj[k]);
            changeData(Obj[k]);
        }
    } else {
        return Obj;
    }
}
