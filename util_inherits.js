var util = require("util");

/* Parent */
function Animal(name){
    this.name = name;
}

Animal.prototype.walk = function(){
    console.log("Ходит " + this.name);
};


/* Child */
function Rabbit(name) {
    this.name = name;
}
/* inherits */
util.inherits(Rabbit, Animal);

Rabbit.prototype.jump = function(){
    console.log("Прыгает "+ this.name);
};

/* use */
var rabbit = new Rabbit("Кролик Роджер");
rabbit.walk();
rabbit.jump();


/* первый поток (строка в консоле) */
console.log('log');

/* второй поток в консоле */
console.error('Error');

