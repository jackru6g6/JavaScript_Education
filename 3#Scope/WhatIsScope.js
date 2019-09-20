var foo = 1;
var aaa = 2222;

function bar() {
    console.log('bar First', foo)
    //if (!foo) { var foo = 10; }
    console.log('bar Last', aaa);
}
// var bar = function () {
//     console.log('bar First', foo)
//     //if (!foo) { var foo = 10; }
//     console.log('bar Last', foo);
// }


// function bar() {
//     var arrayTest = ["1", "2", "3"];
//     function bar_test() {
//         console.log(`arrayTest[0]: ${arrayTest[0]}`);

//         //var arrayTest = "改成string";
//         console.log(`arrayTest: ${arrayTest}`);
//     }
//     return bar_test();
// }

bar();