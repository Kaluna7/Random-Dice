var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;


function randomDice() {
    var dice1 = document.querySelector(".img1");
    var dice2 = document.querySelector(".img2");

    if (dice1 && dice2) {
        dice1.src = "./images/dice" + randomNumber1 + ".png";
        dice2.src = "./images/dice" + randomNumber2 + ".png";
    }
}


function theWinner(){
    if (randomNumber1 >= randomNumber2){
        document.querySelector(".text").innerHTML = "Player 1 Wins <br> Refresh & Roll Again";
    }else if (randomNumber1 <= randomNumber2){
        document.querySelector(".text").innerHTML = "Player 2 Wins <br> Refresh & Roll Again";
    } if(randomNumber1 === randomNumber2){
        document.querySelector(".text").innerHTML = "It's a Draw <br> Refresh & Roll Again";
    }
}


document.querySelector('.roll').onclick = function(){
    randomDice();
    theWinner();
    };
