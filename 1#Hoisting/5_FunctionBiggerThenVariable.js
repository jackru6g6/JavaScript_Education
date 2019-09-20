///Function的Hoisting大於變數宣告
console.log(a); //[Function: a]

var a;
function a(){}


///Hoisting後
function a(){}
var a;

console.log(a); //[Function: a]