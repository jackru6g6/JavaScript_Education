//java、C#類別寫法

function Person(name, id) {
    this.name = name;
    this.id = id;
    this.callName = function () {
        console.log(`我的名子是${this.name}，ID為${this.id}`);
    };
}

var Jack = new Person("Jack", "00F549");

var Frank = new Person('Frank', 'Doe');

var KK = new Person('KK',"00DDDD");
///改善：
///1.將方法拉出，並已prototype給予
function Person_Improve(name, id) {
    this.name = name;
    this.id = id;
}

Person_Improve.prototype.callName_Prop = function(){
    console.log(`我的名子是${this.name}，ID為${this.id}`);
}

var Jack_Improve = new Person_Improve("Warren","F549");
console.log(Jack_Improve);
