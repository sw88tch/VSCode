var numbers = [2, 4, 6, 8];
var es5squared = numbers.map(function(n) { return n * n});
console.log(es5squared)
var es6squared = numbers.map(n => n * n);
console.log(es6squared)