function Animal(name){
    this.name = name; 
    console.log(this.name);
}

Animal.prototype.callName = function(){
    console.log(`我的名子是${this.name}`);
}

Animal.callNameNew = function(){
    console.log(`我的New名子是${this.name}`);
}

// function Dog(name){
//     this.name = name;
// }


//Dog.__proto__ = Animal.prototype;///非常不建議這麼做



function Cat(name) {
    Animal.apply(this, [name]); //構造函數綁定
}
Cat.prototype = Object.create(Animal.prototype);// Cat 繼承 Animal

// var _dog = new Dog('狗');
// var _cat = new Cat('貓');

var _Animal = new Animal('Animal');
var _Cat = new Cat('Cat');

_Animal.callName();
_Cat.callNameNew();
