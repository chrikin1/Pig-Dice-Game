PigDice={
    roll:function () {
        return parseInt(Math.random() * (6 - 1) + 1);
    }
};
let player1={
    name:'',
    score:0
},
    player2={
        name:'',
        score:0
};

$('#start').on('click',function(){
    player1.name=$('#player1').val();
    player2.name=$('#player2').val();
    $('#player1r .name').html(player1.name);
    $('#player2r .name').html(player2.name);
});

let tmp=0;
let turn=1;

$(document).ready(function(){
    $('#player1r .name').html();
    $('#total-score-1').html(0);
    $('#player2r .name').html();
    $('#total-score-2').html(0);

});

function myTurn(player,score){
    if(player===turn){
        tmp+=score;
    }else{
        tmp=score;
    }
    if(score===1){
        if(player===1){
            $('#turn').html('Player 1 score: '+tmp+'<i> Hand over the controls to the next player</i>');
            $('#player1-roll').prop('disabled',true);
            $('#player2-roll').prop('disabled',false);
        }else if(player===2){
            $('#turn').html('Player 2 score: '+tmp+'<i> Hand over the controls to the next player</i>');
            $('#player2-roll').prop('disabled',true);
            $('#player1-roll').prop('disabled',false);
        }
    }else{
        if(player===1){
            $('#turn').html('Player 1 score: '+tmp);
            player1.score+=score;
            $('#total-score-1').html(player1.score);
        }else if(player===2){
            $('#turn').html('Player 2 score: '+tmp);
            player2.score+=score;
            $('#total-score-2').html(player2.score);
        }
    }
    turn=player;
    checkWinner(player);
}

function checkWinner(player){
    if(player===1){
        (player1.score>=100)?alert('Player 1 wins'):false;
    }else if(player === 2){
        if(player2.score>=100){
            alert('Player 2 wins');
        }
    }
}
