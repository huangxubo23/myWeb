//为了使用AngularJS的服务，我们只需要在控制器的构造函数里面作为参数声明出所需服务的名字，如$scope、$http等。
function PhoneListCtrl($scope, $http) {
    $scope.angularDes = { "info": "对于AngularJS应用，我们鼓励使用模型-视图-控制器（MVC）模式解耦代码和分离关注点。考虑到这一点，我们用AngularJS来为我们的应用添加一些模型、视图和控制器。" };
    
    //硬编码的数据集
    /*$scope.phones = [
        {
            "name": "S视图和模板",
            "snippet": "在AngularJS中，一个视图是模型通过HTML模板渲染之后的映射。这意味着，不论模型什么时候发生变化，AngularJS会实时更新结合点，随之更新视图。",
            "age": 0
        }, {
            "name": "M模型和控制器",
            "snippet": "在控制器里面初始化了数据模型。",
            "age": 1
        }, {
            "name": "Z作用域",
            "snippet": "AngularJS的作用域理论非常重要。一个作用域可以视作模板、模型和控制器协同工作的粘接器。AngularJS使用作用域，同时还有模板中的信息，数据模型和控制器。这些可以帮助模型和视图分离，但是他们两者确实是同步的！任何对于模型的更改都会即时反映在视图上；任何在视图上的更改都会被立刻体现在模型中。",
            "age": 2
        }, {
            "name": "S数据绑定",
            "snippet": " 数据绑定是AngularJS的一个核心特性。当页面加载的时候，AngularJS会根据输入框的属性值名字，将其与数据模型中相同名字的变量绑定在一起，以确保两者的同步性。",
            "age": 3
        }
    ];*/

    //在控制器默认按age排序，如果不设置默认值，这个模型会在我们的用户在下拉菜单选择一个顺序之前一直处于未初始化状态。
    //双向数据绑定
    $scope.orderProp = "age";

    //$http向Web服务器发起一个HTTP GET请求。
    //$http服务用success返回[对象应答][ng.$q]。当异步响应到达时，用这个对象应答函数来处理服务器响应的数据，并且把数据赋值给作用域的phones数据模型。注意到AngularJS会自动检测到这个json应答，并且已经为我们解析出来了！
    $http.get("js/app/phones.json").success(function(data) {
        $scope.phones = data;
        //在PhoneListCtrl控制器中，把HTTP应答预处理一下，使得只显示手机列表的前五个。在$http回调函数里面使用如下代码：
        //$scope.phones = data.splice(0, 5);
    });
}

/*=====JS代码压缩问题=====*/
//为了克服压缩引起的问题，只要在控制器函数里面给$inject属性赋值一个依赖服务标识符的数组，就像下边被注释掉的那一行一样：
//PhoneListCtrl.$inject = ['$scope', '$http'];

//另一种方法也可以用来指定依赖列表并且避免压缩问题——使用Javascript数组方式构造控制器：把要注入的服务放到一个字符串数组（代表依赖的名字）里，数组最后一个元素是控制器的方法函数：
//var PhoneListCtrl = ['$scope', '$http', function ($scope, $http) { /* constructor body */ } ];