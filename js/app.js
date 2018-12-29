var player1Score, player2Score, player1TempScore, player2TempScore, diceDom;
var currentPlayer = 0;
var tempScore = 0;

var totalScore1 = 0, totalScore2 = 0;
player1Score = $('.total-score-1');
player2Score = $('.total-score-2');
player1TempScore = $('.score-1');
player2TempScore = $('.score-2');
diceDom = $('#dice');

diceDom.style.display = 'none';
player1Score.innerHTML = totalScore1;
player2Score.innerHTML = totalScore2;
player1TempScore.innerHTML = 0;
player2TempScore.innerHTML = 0;
$('.player-1').style.backgroundColor = '#dddddd';
$('.player-b-1').style.backgroundColor = '#dddddd';



$('.dice-roll').addEventListener('click', function(){
    
    diceDom.style.display = 'block';
    var dice = Math.floor((Math.random() * 6) + 1);
    tempScore += dice;
    diceDom.src = 'images/dice-'+ dice + '.png';
    if (dice === 1) {
        if(currentPlayer === 0 ){
            currentPlayer = 1;
            player1TempScore.innerHTML = 0;
            tempScore = 0;
            $('.player-1').style.backgroundColor = 'white';
            $('.player-b-1').style.backgroundColor = 'white';
            $('.player-2').style.backgroundColor = '#dddddd';
            $('.player-b-2').style.backgroundColor = '#dddddd';
            
        } else {
            currentPlayer = 0;
            player2TempScore.innerHTML = 0;
            tempScore = 0;
            $('.player-1').style.backgroundColor = '#dddddd';
            $('.player-b-1').style.backgroundColor = '#dddddd';
            $('.player-2').style.backgroundColor = 'white';
            $('.player-b-2').style.backgroundColor = 'white';
            
        }

    } else {
        if (currentPlayer === 0) {
            player1TempScore.innerHTML = tempScore;
        } else {
            player2TempScore.innerHTML = tempScore;
        }
    }

});

$('.add-points').addEventListener('click', function(){

    
    
    if (currentPlayer === 0) {
            currentPlayer = 1;
            totalScore1 += tempScore;
            tempScore = 0;
            player1TempScore.innerHTML = 0;
            player1Score.innerHTML = totalScore1;
            $('.player-1').style.backgroundColor = 'white';
            $('.player-b-1').style.backgroundColor = 'white';
            $('.player-2').style.backgroundColor = '#dddddd';
            $('.player-b-2').style.backgroundColor = '#dddddd';
            
        } else {
            currentPlayer = 0;
            totalScore2 += tempScore;
            tempScore = 0;
            player2TempScore.innerHTML = 0;
            player2Score.innerHTML = totalScore2;
            $('.player-1').style.backgroundColor = '#dddddd';
            $('.player-b-1').style.backgroundColor = '#dddddd';
            $('.player-2').style.backgroundColor = 'white';
            $('.player-b-2').style.backgroundColor = 'white';
    }

    if (totalScore1 >= 200) {
        $('.player-head-1').innerHTML = 'Hurrey.. You are Winner :)';
        $('.player-head-1').style.color = '#f44336';
        player1TempScore.innerHTML = 0;
        player1Score.innerHTML = 0;
        player2TempScore.innerHTML = 0;
        player2Score.innerHTML = 0;
        diceDom.style.display = 'none';
    } else if(totalScore2 >= 200) {
        $('.player-head-2').style.color = '#f44336';
        $('.player-head-2').innerHTML = 'Hurrey.. You are Winner :)';
        player1TempScore.innerHTML = 0;
        player1Score.innerHTML = 0;
        player2TempScore.innerHTML = 0;
        player2Score.innerHTML = 0;
        diceDom.style.display = 'none';
        
    }
});


function $(par) {
    return document.querySelector(par);
}
