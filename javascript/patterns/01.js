/*单例模式*/
var myName = function () {
    var mask;
    return function() {
        return mask || (mask = "harry");
    }
}();
var obj0 = myName();
alert(obj0);


var createMask = function () {
    var result;
    return function() {
        return result || (result = createMask.create.call());
        //return result || (result = create.call(this));  //错误
    }
}();

createMask.create = function () {
    return "poney";
}
var obj1 = createMask();
alert(obj1);


var singleton = function(fn) {
    var result;
    return function (fn) {
        return result || (result = fn.apply("peter"));
        //return result || (result = fn("peter"));  //正确,可以传参数
    }
}();
var create = function(str) {
    return "My name is " + (str || "harry");
}
var obj2 = singleton(create);
alert(obj2);
