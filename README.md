# cs-algorithims

## Binary Search 
Binary Search is an efficent algorithm for finding an item from an ordered list of items. It works by repeatedly dividing in half the portion of the list that could contain the item, until you've narrowed down the possible locations to just one. 

# Implementation
The main idea of binary search is to keep track of the current range of reasonable guesses.

# Declaring Functions 

function A(){}; -> function declaration

var B = function(){}; -> function expression 

var C = (function(){}); -> function expression with 
grouping operators.

var D = function foo() {}: -> named function expression

var E = (funtion(){
    return function(){}
})();  -> IIFE that returns a function

var F = new Function(); -> Function constructor

var G = new function(){}; -> Special case: object construcotr

var H = x => x* 2; -> ES6 arrow function