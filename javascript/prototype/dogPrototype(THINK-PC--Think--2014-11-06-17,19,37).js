function Dog() {
    this.wow = function() {
        alert("Wow");
    };
    this.yelp=function() {
        this.wow();
    }
}

function MadDog() {
    this.yeip=function() {
        var self = this;
        setInterval(fn, 1000);
        function fn() {
            self.wow();
        }
    }
}
var xiaomang = new MadDog;
xiaomang.prototype = new Dog;

function xiaoxianFn() {
    var xiaoxian = new Dog();
    xiaoxian.yelp();
}

function xiaomangFn() {
    xiaomang.yeip();
}