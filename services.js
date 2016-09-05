 function Player(playerName, initialScore) {
        this.score = initialScore;
        this.initialScore = initialScore;
        this.name = playerName;
    }

    Player.prototype.changeScore = function (amountToChange) {
       this.score += amountToChange;
        console.log("AmountToChange: " + amountToChange + " AwardedTo: " + this.name);
    }
    
     Player.prototype.resetScore = function () {
        this.score = this.initialScore;
    };



var player1 = new Player("Tom Green", 0);
var player2 = new Player("Rick James", 0);

function awardPoint(amt, playerName){
    this.amt = amt;
    this.player = playerName;
    
    this.player.changeScore(amt);
    console.log(player1.score, player2.score);    
}
awardPoint(9, player1);
awardPoint(33, player2);
awardPoint(5, player2);
