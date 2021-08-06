var numbers = [1, 3, 6, 8]
function *gen(){
    yield 1
    yield 2
    yield 3
}
var x = gen()
console.log(x.next()) 
console.log(x.next()) 
console.log(x.next()) 
console.log(x.next()) 