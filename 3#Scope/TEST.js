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

function siblings() {
    var siblings = ["John", "Liza", "Peter"];
    function siblingCount() {
        var siblingsLength = siblings.length;
        return siblingsLength;
    }

    // function joinSiblingNames() {
    //     return "I have " + siblingCount() + " siblings:\n\n" + siblings.join("\n");
    // }
    //return joinSiblingNames();
    return siblingCount();
}

console.log(siblings()); //輸出 "I have 3 siblings: John Liza Peter"