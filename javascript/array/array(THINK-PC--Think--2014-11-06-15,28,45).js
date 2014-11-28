var stringArray = ["This", "is", "Baidu", "Campus"];
function alertStr() {
    var str = stringArray.join(" ");
    alert(str);
    //This is Baidu Campus
}

var foo = "get-element-by-id";
function changeUp() {
    var str = combo(foo);
    alert(str);
    //getElementById
}
function combo(msg) {
    var arr = msg.split("-");
    for (var n = 1; n < arr.length; n++) {
        arr[n] = arr[n].charAt(0).toUpperCase() + arr[n].substr(1, arr[n].length);
    }
    msg = arr.join("");
    return msg;

    //var strData = arr[0].charAt(0).toLowerCase() + arr[0].substr(1, arr[0].length);
    //for (var i = 1; i < arr.length; i++) {
    //    var str = arr[i].charAt(0).toUpperCase() + arr[i].substr(1, arr[i].length);
    //    strData += str;
    //}
    //return strData;
}

var numberArray = [3, 6, 2, 4, 1, 5];
function reverse() {
    numberArray.reverse();
    alert(numberArray);
    //console.log(numberArray);
}
var sortArray = cloneData(numberArray);
function sortArr(num) {
    if (num === 0) {
        //升序
        sortArray.sort(function(a, b) {
            return a - b;
        });
        alert(sortArray);
    }else if (num === 1) {
        //降序
        sortArray.sort(function(a, b) {
            return b - a;
        });
        alert(sortArray);
    }else if (num === 2) {
        var newArray = [23, 13, 9, 5, 55];
        //默认排序，[13,23,5,55,9]
        alert(newArray.sort());
        //使用排序函数（升序）,[5,9,13,23,55]
        newArray.sort(function (a, b) {
            return a - b;
        });
        alert(newArray);
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
    } else if (Obj instanceof Object) {
        buf = {};  //创建一个空对象
        for (var k in Obj) {  //为这个对象添加新的属性
            buf[k] = cloneData(Obj[k]);
        }
        return buf;
    } else {  //普通变量直接赋值
        return Obj;
    }
}

var aArray=["a","b","c","d"];
var bArray=["e","f","g","h"];
function concatArr() {
    var concatArray = aArray.concat(bArray);
    console.log(concatArray);
    alert(concatArray);
}