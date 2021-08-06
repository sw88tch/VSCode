var numbers = [1, 3, 5, 7]
numbers.forEach(function(e){
    console.log(e)
})

var sum = 0
// numbers.forEach(function(a){
  //  sum += a
// })
numbers.forEach((a) => sum += a)
console.log(sum)