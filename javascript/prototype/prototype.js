//=====1.javascript的方法可以分为三类=====
function People(name) {
    this.name = name;
    //对象方法
    this.Introduce = function() {
        //alert("My name is " + this.name);
        console.log("My name is " + this.name);
    };
}

//类方法
People.Run = function() {
    //alert("I can run");
    console.log("I can run");
}

//原型方法
People.prototype.IntroduceChinese=function() {
    //alert("我的名字是 " + this.name);
    console.log("我的名字是 " + this.name);
}

//测试
var p1 = new People("Harry");
//var p2 = new People("Poney");
p1.Introduce();
People.Run();
p1.IntroduceChinese();
//p2.IntroduceChinese();



//=====3.prototype是什么含义？=====
function BaseClass() {
    this.showMsg = function() {
        alert("BaseClass::showMsg");
    }
}

BaseClass.showMsg = function () {
    alert("BaseClass::showMsg static");
}

function ExtendClass() {
    //函数运行时会先去本体的函数中去找，如果找到则运行，找不到则去prototype中寻找函数。或者可以理解为prototype不会克隆同名函数。
    this.showMsg = function() {
        alert("ExtendClass::showMsg");
    }
}

ExtendClass.showMsg=function() {
    alert("ExtendClass::showMsg static");
}

//extendClass是以baseClass的一个实例为原型克隆创建的。
ExtendClass.prototype = new BaseClass();  
var instance = new ExtendClass();
instance.showMsg();  //ExtendClass::showMsg

//这里的baseinstance.showMsg.call(instance);阅读为“将instance当做baseinstance来调用，调用它的对象方法showMsg”
var baseInstance = new BaseClass();
baseInstance.showMsg.call(instance);  //BaseClass::showMsg

BaseClass.showMsg.call(instance);  //BaseClass::showMsg static
ExtendClass.showMsg.call(instance);  //ExtendClass::showMsg static 

 