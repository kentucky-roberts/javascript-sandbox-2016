var cards = ["Ace", "King", "Queen", "Jack", "Ten"];

function shuffleCards (cards) {
    this.cards = cards;
    var currentIndex = this.cards.length;
    var temporaryValue, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = this.cards[currentIndex];
        this.cards[currentIndex] = this.cards[randomIndex];
        this.cards[randomIndex] = temporaryValue;
    }
};

shuffleCards(cards);
console.log(cards);