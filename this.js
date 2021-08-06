function hello(){
    console.log('Hello', this)
}

// hello()

const person = {
    name: 'Kirill',
    age: 31,
    sayHello: hello,
    // sayHelloWindow: hello.bind(window)
    logInfo: function() {
        console.log(`Name is ${this.name}`)
        console.log(`Age is ${this.age}`)
    }
}

const lena = {
    name: 'Elena',
    age: 23
}

// console.log(person)
// console.log(person.sayHello)
// console.log(sayHelloWindow)
// console.log(person.logInfo())
console.log(person.logInfo.bind(lena)())