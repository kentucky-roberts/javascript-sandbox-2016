 function CarFactory(a, b, c){
    this.a = a;
    this.b = b;
    this.c = c;
 }


 function TeamFactory(x, y, z){
    this.x = x;
    this.y = y;
    this.z = z;
 }


var newCar = new CarFactory("green", "honda", "civic");
//console.log(newCar);

var newTeam = new TeamFactory(newCar, null, null);
console.log(newTeam);



Deck.prototype.shuffle = function () {

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
/*
Exception: ReferenceError: Deck is not defined
@Scratchpad/4:34:1
*/