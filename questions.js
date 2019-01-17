//How would you make this work? 
//add(2,5); --> 7
//add(2)(5); --> 7 

var answer = "i'm a lasagna hog".split("").reverse().join("");
// console.log(answer);

// var foo = {n:1};
// var bar = foo;
// foo.x = foo = {n:2};
// console.log(foo);

console.log('one');
setTimeout(function () {
    console.log('two');
}, 0);
Promise.resolve().then(function () {
    console.log('three');
})
console.log('four');