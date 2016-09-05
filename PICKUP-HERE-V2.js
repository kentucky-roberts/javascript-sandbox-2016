////  TEAM OBJECT
function Team(team_name, original_score){
  var team = this;
  this.team_name = team_name;
  this.original_score = original_score;
  this.score = original_score;
}

  Team.prototype.logInfo = function () {
    console.log(
      "team_name: " + this.team_name, 
      "original_score: " + this.original_score, 
      "score: " + this.score
    );
  };

  Team.prototype.addPoint = function () {
    this.score ++;
    console.log(this.score);
  };

  Team.prototype.removePoint = function(){v
    this.score --;
    console.log(this.score);
  };

  Team.prototype.resetScore = function () {
    this.score = original_score;
    console.log(this.score);
  };  

//// END TEAM OBJECT
//
var team1 = new Team("Team1", 0);
var team2 = new Team("Team2", 0);
team1.logInfo();




////  TEAMS OBJECT
function Teams(team1, team2){
  var teams = this;
  this.t1 = team1;
  this.t2 = team2;
}
// END TEAMS OBJECT
//
var teams = new Teams(team1, team2);

//console.log(teams.t1 + teams.t2);
// console.log(team1);
// console.log(team2);
// team1.addPoint();











var phrase = ["Ace", "King", "Queen", "Jack", "Ten"];
for (var i = 0, len = phrase.length; i < len; i++) {
  //console.log(phrase);
  //someFn(arr[i]);
}

//var deck = Array.prototype.slice.call(allCards); 

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
//console.log(cards);
//// ok that works now get phrase and alt_phrase to join and create a card
// then use that logic in a for loop to create a cards from each phrase and alt_phrase 



var phrases = ["Run fast", "Eat snails", "Talk to turtles", "Scuba dive"];
var alt_phrases = ["Eat Pizza", "Find Waldo", "Carpet cleaning", "Do jumpingjacks" ];








//// CARD OBJECT
function Card(phrases, alt_phrases) {
   this.phrases = phrases;
   this.alt_phrases = alt_phrases;
}

Card.prototype.name = function () {
  return this.phrases + ' ' + this.alt_phrases;
};
//// END CARD OBJECT
//
var newCard = new Card(phrases, alt_phrases);

  
  





////  DECK OBJECT
function Deck(phrases, alt_phrases){
  var deck = this;
  this.cards = [];
  this.dealt = [];
  this.phrases = phrases;
  this.alt_phrases = alt_phrases;

  deck.phrases.forEach(function (phrase) {
    deck.alt_phrases.forEach(function(alt_phrase){
      var card = new Card(phrase, alt_phrase);
      deck.cards.push(card);
    })
  });
  deck.shuffle(deck.cards);
}

Deck.prototype.shuffle = function(cards){
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
}

//  collect all cards from both 
Deck.prototype.reset = function () {
  this.cards = this.cards.concat(this.dealt);
  this.dealt = [];
  this.shuffle();
};

Deck.prototype.deal = function(){
  var card = this.cards.shift();
  this.dealt.push(card);
  console.log("Dealt cards:", this.dealt);
};
//// END DECK OBJECT
//
var deck = new Deck(phrases, alt_phrases);
//console.log(deck.reset(deck));
// successfully used the foreach loop to 
// mix our two arrays, match {phrase} and {alt_phrase} to create a card.
// push that new card to the "deck.cards" array
////  END DECK OBJECT  
  



function newDealer(deck){
  var dealer = new Dealer(deck);
  return dealer;
}

////  DEALER OBJECT
function Dealer(deck){
  var dealer = this;
  this.deck = deck;
  
  

  dealer.init = function(){
    dealer.cards = [];
    dealer.handValue = 0;
    dealer.isDone = false;
    dealer.busted = false;
    dealer.maxValue = 21;
    dealer.minValue = 17;
  };


  
   dealer.deal = function(){
     console.log("hitting...");
     dealer.init();
     dealer.hit();
     dealer.hit();
     dealer.hit();
   };


  dealer.hit = function(){
    //var card = dealer.deck.deal();
    var card = dealer.cards.pop();
    dealer.dealt.push(card);
    console.log("dealer.dealt.length", dealer.dealt.length, card );
  };


  dealer.init();  
}
////  END DEALER OBJECT
//
var dealer = new Dealer(deck);
//console.log("dealer1.deck.cards[0]: " + dealer1.deck.cards[0]);
console.log(dealer.deck.deal());






////  GAME OBJECT
function Game(teams, dealer){
  var game = this;
  
  
  game.init = function(teams) {
   console.log("game.init called");
    game.teams = teams;
    console.log("game.teams: " + game.teams);

    game.deck = deck;
    game.dealer = dealer.deck;
    console.log(game.dealer);

    game.playerCards = [];
    game.handValue = 0;
    game.maxScore = 21;  // service call in ngApp
    game.canDeal = false;
    game.started = false;
    game.over = false;
    game.showResults = false;
  }
  
  
  game.start = function() {
    console.log("game.start called");
    game.started = true;
    game.over = false;
    game.winner = [];
    game.turn = 1;
  };
  
  game.over = function () {
   console.log("Game over");
  };
  
  game.nextTurn = function () {
    console.log("next turn");
    game.checkForWinner();
    game.turn ++;
  };
  
  game.checkForWinner = function() {
   console.log("checking for winner ...");
   var team1Score = game.team[0].score;
   var team2Score = game.team[1].score;
    console.log("team1Score: " + team1Score);
    console.log("team2Score: " + team2Score);
    
    if (team1Score === game.maxScore){
          game.started = false;
          game.over = true;
          game.winner = game.team[0];
          console.log(game.winner);
    }
    
    if (team2Score === game.maxScore){
          game.started = false;
          game.over = true;
          game.winner = game.team[1];
          console.log(game.winner);
    } else {
      console.log("no winners yet");
      game.winner = null;
    }
    
  };
  
  
  
  game.reset = function () {
    game.player = null;
    game.init();
  };

  
  game.init(teams, dealer);

} 
////  END GAME OBJECT
//

var game = new Game(teams, dealer);

//game1.start();
//game1.dealer.deal();
//game.dealer.hit();
//ga1me1.dealer();
console.log(game.dealer);










/*
Exception: TypeError: game.dealer.hit is not a function
@Scratchpad/1:326:1
*/
/*
Exception: TypeError: game.dealer.hit is not a function
@Scratchpad/1:326:1
*/
/*
Exception: ReferenceError: dealer1 is not defined
Game/game.init@Scratchpad/1:251:5
Game@Scratchpad/1:316:3
@Scratchpad/1:322:12
*/
/*
Exception: ReferenceError: dealer1 is not defined
Game/game.init@Scratchpad/1:251:5
Game@Scratchpad/1:316:3
@Scratchpad/1:322:12
*/