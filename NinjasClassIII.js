class Ninja {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }

    sayName() {
        console.log(`My name is ${this.name}!`);
        return this;
    }

    showStats() {
        console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}`);
        return this;
    }

    drinkSake() {
        this.health += 10;
        return this;
    }
}

class Sensei extends Ninja {
    constructor(name) {
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }

    speakWisdom() {
        super.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.");
        return this;
    }
}

let ninja1 = new Ninja('Leonardo');
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
console.log(ninja1.health);

let super_sensei = new Sensei("Master Splinter");
super_sensei.speakWisdom();
super_sensei.showStats();