// console.log(Math.max(...[5, 20, 31, 12]))

var arr = [5, 20, 31, 12]
max = Math.max.apply(this, arr);
console.log(max)