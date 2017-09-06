function Ninja(name) {
    this.name = name;
    this.health = 100;

    var speed = 3;
    var strength = 3;

    this.showStats = function() {
        console.log("Name: " + this.name + ", Health: " + this.health + ", Speed: " + speed + ", Strength: " + strength);
        return this;
    }

    this.getStrength = function() {
        return strength;
    }
}

Ninja.prototype.sayName = function() {
    console.log("My name is " + this.name);
    return this;
}

Ninja.prototype.drinkSake = function() {
    this.health += 10;
    return this;
}

Ninja.prototype.punch = function(ninja) {
    if (ninja instanceof Ninja) {
        ninja.health -= 5;
        console.log(ninja.name + " was punched by " + this.name + " and lost 5 Health");
        return this;
    } else {
        console.log("ERROR: " + ninja + " is not a Ninja!");
    }
}

Ninja.prototype.kick = function(ninja) {
    if (ninja instanceof Ninja) {
        var damage = 15 * this.getStrength();
        ninja.health -= damage;
        console.log(ninja.name + " was kicked by " + this.name + " and lost " + damage + " Health");
        return this;
    } else {
        console.log("ERROR: " + ninja + " is not a Ninja!");
    }
}

var ninja1 = new Ninja("Hyabusa");
var ninja2 = new Ninja("Goemon");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
console.log(ninja1.health);

ninja1.punch("hi");
ninja1.punch(ninja2);
console.log(ninja2.health);

ninja1.kick(1);
ninja1.kick(ninja2);
console.log(ninja2.health);