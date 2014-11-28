/*单例模式*/
//var createMask = function () {
//    var mask;
//    return function() {
//        return mask || (mask = "harry");
//    }
//}();

//var obj = createMask();
//alert(obj);

var createMask = function (fn) {
    var result;
    return function() {
        return result || (result = createMask.create.call(this));
    }
}();

createMask.create = function () {
    return "harry";
}
var obj1 = createMask();
alert(obj1);


var singleton = function(fn) {
    var result;
    return function() {
        return result || (result = fn.apply(this));
    }
}();
var create = function() {
    return "peter";
}
var obj2 = singleton(create);
alert(obj2);
