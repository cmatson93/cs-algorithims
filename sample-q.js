//What will this code output to the console?
var myObject = {
    foo: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.foo = " + this.foo);
        console.log("outer func:  self.foo = " + self.foo);
        (function() {
            console.log("inner func:  this.foo = " + this.foo);
            console.log("inner func:  self.foo = " + self.foo);
        }());
    }
};
myObject.func();

function foo1() {
    return {
        bar: "hello"
    };
}

function foo2() {
    return {
        bar: "hello"
    };
}

console.log(foo1());
console.log("----");
console.log(foo2());


function mul(params) {

}


console.log(mul(2)(3)(4)); // output : 24 
console.log(mul(4)(3)(4)); // output : 48