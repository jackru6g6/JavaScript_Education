///Function的Hoisting
console.log(consoleFunction_1); // undefined
consoleFunction_1('Jack'); // consoleFunction_1 is not a function
var consoleFunction_1 = function (name) {
    console.log(name)
}

///但是下列允許
consoleFunction_2('Jack'); // callSomeone is not a function
function consoleFunction_2(name) {
    console.log(name)
}
