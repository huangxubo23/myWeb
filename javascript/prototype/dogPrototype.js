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
        setInterval(function() {
            self.wow();
        }, 1000);
    }
}
MadDog.prototype = new Dog;

function xiaoxianFn() {
    var xiaoxian = new Dog();
    xiaoxian.yelp();
}

function xiaomangFn() {
    var xiaomang = new MadDog();
    xiaomang.yeip();
}