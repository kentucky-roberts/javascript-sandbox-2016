
/**
*  Knuth Shuffle Implementation
*  https://github.com/coolaj86/knuth-shuffle
*/


var cards = ["Ace", "King", "Queen", "Jack", "Ten"];

   
function shuffleCards (cards) {
    this.cards = cards;

    var currentIndex = this.cards.length;
    var temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = this.cards[currentIndex];
        this.cards[currentIndex] = this.cards[randomIndex];
        this.cards[randomIndex] = temporaryValue;
    }
};

shuffleCards(cards);  // pass in the default array of cards
console.log(cards);


