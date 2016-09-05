var allCards, deck, dealtCards, oldCards, newCards;



var allCards = ["Ace", "King", "Queen", "Jack", "Ten"];
var dealtCards = allCards.slice(0, 3);


// var deck = allCards.push(); // console printed '5' which i think is just the length of array
//   var deck = allCards.concat(); //  console printed correct merged deck: Array ["Banana", "Orange" ...]


//dealtCards.push(allCards.splice(0, 3));

//console.log("dealt cards:" , dealtCards);

//var deck = Array.prototype.slice.call(allCards); 
//var deck2 = Array.prototype.slice.call(deck); 
//console.log("deck:" , deck);
//console.log("deck2:" , deck2);


function newDeck(){
    var deck = new Deck();
    return deck;
}


function Deck() {
    var deck = this;
    deck.cards = [];
    deck.dealt = [];
}




 Deck.prototype.suits = ['C', 'D', 'S', 'H'];

    Deck.prototype.ranks = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];

console.log("deck:" , deck);