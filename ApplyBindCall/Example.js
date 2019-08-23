///call、apply
var test1 = {
    name: "test1",
    callName: function () {
        console.log(this.name);
    },
    addCount: function (a, b) {
        console.log(a + b);
    }
}
//test1.callName();

//test1.callName.call({ name: "call_Jack" });

//test1.callName.apply({ name: "apply_Jack" });

//test1.addCount(1)



///bind
global.a = 20;
function test_bind() {
  console.log(this.a);
}
var bind_global = test_bind.bind(global);
var obj = { a: 1, func: bind_global };
obj.func();           // 20
obj.func.call(obj);   // 20
obj.func.apply(obj);  // 20
obj.func.bind(obj)(); // 20