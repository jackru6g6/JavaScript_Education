///範例1
function callName() {
    console.log(this.name);
}

var Jack = {
    name: "Jack Chen",
    callJack: callName,
}

global.name = "無名氏";

// callName();
// Jack.callJack();
///結論：若使用在物件，那麼 this 則是該物件



///範例2：物件
var Warren = {
    name: "Warren Chen",
    callName: function () {
        console.log(this.name);
    }
}

callName_global = Warren.callName;
//callName_global();
//Warren.callName();

///結論：this無關宣告的地方位置，而是跟呼叫的方法有關


///範例3：建構式
function PeopleConstructor() {
    this.name = "Jack"
}
var JackChen = new PeopleConstructor();
console.log(JackChen.name);
///結論：建構式下會 new 一個新物件，此時的 this 會指向新的物件


///額外講解$.each
function test(){
    console.log(`this ${this}`);
	var test_array = [];
    $.each(['1','2'],function(){
		test_array.push(this);
    });
    console.log(test_array);
}
test();