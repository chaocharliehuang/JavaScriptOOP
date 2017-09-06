class Deck {
    constructor() {
        this.deck = [
            'AS', '2S', '3S', '4S', '5S', '6S', '7S', '8S', '9S', '10S', 'JS', 'QS', 'KS', 'AH', '2H', '3H', '4H', '5H', '6H', '7H', '8H', '9H', '10H', 'JH', 'QH', 'KH', 'AD', '2D', '3D', '4D', '5D', '6D', '7D', '8D', '9D', '10D', 'JD', 'QD', 'KD', 'AC', '2C', '3C', '4C', '5C', '6C', '7C', '8C', '9C', '10C', 'JC', 'QC', 'KC'
        ];
    }

    shuffle() {
        let remainingCards = this.deck.length;
        while (remainingCards) {
            let randomIndex = Math.floor(Math.random()*remainingCards--);
            let temp = this.deck[remainingCards];
            this.deck[remainingCards] = this.deck[randomIndex];
            this.deck[randomIndex] = temp;
        }
        return this;
    }

    reset() {
        this.deck = [
            'AS', '2S', '3S', '4S', '5S', '6S', '7S', '8S', '9S', '10S', 'JS', 'QS', 'KS', 'AH', '2H', '3H', '4H', '5H', '6H', '7H', '8H', '9H', '10H', 'JH', 'QH', 'KH', 'AD', '2D', '3D', '4D', '5D', '6D', '7D', '8D', '9D', '10D', 'JD', 'QD', 'KD', 'AC', '2C', '3C', '4C', '5C', '6C', '7C', '8C', '9C', '10C', 'JC', 'QC', 'KC'
        ];
        return this;
    }

    dealCard() {
        return this.deck.pop();
    }
}

class Player {
    constructor(name) {
        this.name = name;
        this.hand = [];
    }

    takeCard(deck) {
        this.hand.push(deck.dealCard());
        return this;
    }

    discardCard(card) {
        let cardIndex = this.hand.indexOf(card);
        if (cardIndex !== -1) {
            this.hand.splice(cardIndex, 1);
        } else {
            console.log("ERROR: card is not in player's hand!");
        }
        return this;
    }
}

let deck1 = new Deck();
let player1 = new Player('Joe');
deck1.shuffle();
player1.takeCard(deck1);
player1.takeCard(deck1);
player1.takeCard(deck1);
player1.takeCard(deck1);
player1.takeCard(deck1);
console.log(player1.hand);
console.log(deck1.deck.length);
player1.discardCard(player1.hand[3]);
console.log(player1.hand);
player1.discardCard('43');