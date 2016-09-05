js-move-object-one-array-to-another-OFFICIAL

var deck = [];
var newCards = ["Ace", "King", "Queen"];
// console.log(arr1);
var oldCards =  ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// console.log(arr2);
oldCards.push(newCards.splice(Math.floor(Math.random() * newCards.length), 1));

console.log(newCards);
console.log(oldCards);


