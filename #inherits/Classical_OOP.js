function People(name){
    this.name = name;
}

People.prototype.sayName = function(){
    console.log(`我的名子 ${this.name}`);
}


///--------------------------------
///繼承 寫法1
///--------------------------------

// function Programer(name){
//     People.call(this,name);
// }
// Programer.prototype = Object.create(People);


// Programer.prototype.sayName = function(){
//     console.log(`10010111~ 我的名子是 ${this.name}`);
// }

// var Jack = new Programer("Jack");
// Jack.sayName();



///--------------------------------
///繼承 寫法1(優化)
///--------------------------------
function inherits(ctor, superCtor){
	ctor.super_ = superCtor;
	ctor.prototype = Object.create(superCtor.prototype,{
		constructor:{
			value:ctor,
			enumerable:false,
			writable:true,
		    configurable:true
		}
	});
}

function Programer(name){
    Programer.super_.call(this,name);
}

inherits(Programer, People);

Programer.prototype.sayName = function(){
    console.log(`10010111~ 我的名子是 ${this.name}`);
}

var Jack = new Programer("Jack");
Jack.sayName();


///--------------------------------
///繼承 寫法2
///--------------------------------

var People = { ///似C#類別
    name : "people",
    create : function(values){
        var instance = Object.create(this);
        Object.keys(values).forEach(function(key) {
          instance[key] = values[key];
        });
        return instance;
    },
    sayName: function() {
        console.log(this.name);
    }
};

var Programer = People.create({ ///似C# 繼承 People，並增加方法 Coding
    Coding: function() {
      console.log(`我是 ${this.name}, 我正在Coding`);
    },
    sayName: function() {
        console.log(this.name + "~~~~~~~~~~~~~~~~");
    }
});

var Jack = Programer.create({
    name:"Jack",
});

Jack.sayName();
Jack.Coding();


  
