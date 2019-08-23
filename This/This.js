var test_1 = "這是Closure";///Closure
global.test = "這是全域變數test";

function CallThis() {
    console.log(`這是test_1參數: ${test_1}`);
    console.log(`這是this參數: ${this}`);
    console.log(`這是this的test參數: ${this.test}`);
}

//CallThis();

function Functio_1() {
    console.log(`這是Functio_1內的global.test: ${this.test}`);

    function Functio_2() {
        console.log(`這是Functio_2內的global.test: ${this.test}`);
    }
    Functio_2();
}

Functio_1();
///結論：如果直接調用函式，this都會指向window(global)

///這邊舉例$.each()
$.each(["1","2","3"],function() {
    console.log(this);
});