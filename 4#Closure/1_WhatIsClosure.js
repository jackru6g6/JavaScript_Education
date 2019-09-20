A();

///問題
function A() {
    for (var i = 1; i <= 5; i++) {
        setTimeout(function timer() {
            console.log(i);
        }, i * 1000);
    }
}
///目前看起來是全域範疇，因為 var 宣告的變數不具區塊範疇的特性

///解決方法一:建立一個區塊範疇
function A() {
    for (var i = 1; i <= 5; i++) {
        (function (j) {
            setTimeout(function timer() {
                console.log(j);
            }, j * 1000);
        })(i);
    }
}


///解決方法二:直接使用區塊
///let 會在每次迭代時重新宣告變數 i，並將上一次迭代的結果作為這一次的初始值
// function A() {
//     for (let i = 1; i <= 5; i++) {
//         setTimeout(function timer() {
//             console.log(i);
//         }, i * 1000);
//     }
// }


