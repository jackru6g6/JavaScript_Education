function Animal(name){
    this.name = name; 
}

Animal.prototype.callName = function(){
    console.log(`我的名子是${this.name}`);
}

function Dog(name){
    this.name = name;
}

//Dog.__proto__ = Animal.prototype;///非常不建議這麼做



function Cat(name) {
    Animal.apply(this, [name]); // Cat 繼承 Animal
}
Cat.prototype = Object.create(Animal.prototype);

// var _dog = new Dog('狗');
// var _cat = new Cat('貓');


// var a = Object.create(Animal.prototype);



var b = 11;