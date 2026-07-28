/*take random value between 0 and 1
         we are gonna divide 0 to 1 on number line in three equal parts
        and then assign each value to the moves so each move has equal possibility*/


        /*we can't do this as if (0<=RandomNumber<=1/3) because first js evaluates 0<= condition and turn 
        to boolean values 1,0 then compaore <=1/3 which results in wrong output*/

        let score = JSON.parse(localStorage.getItem('score')) || {Win:0, Tie:0, Lose:0};//2.getting our stored item from local storage > converting to object > saving that object in constant 'score'.
        let computerMove = '';

        let result = '';

        function setting_move() {

            const RandomNumber = Math.random();

            if (0 <= RandomNumber && RandomNumber <= 1 / 3) {
                computerMove = 'rock';
            }
            else if (1 / 3 < RandomNumber && RandomNumber <= 2 / 3) {
                computerMove = 'paper';
            }
            else {
                computerMove = 'scissors';
            }
        }

        function output_game(player_move) {
            if (player_move === 'rock') {
                if (computerMove === 'rock') {
                    result = 'Tie';
                }
                else if (computerMove === 'paper') {
                    result = 'You Lose';
                }
                else if (computerMove === 'scissors') {
                    result = 'You Win';
                }
            }

            else if (player_move === 'paper') {
                if (computerMove === 'rock') {
                    result = 'You Win';
                }
                else if (computerMove === 'paper') {
                    result = 'Tie';
                }
                else if (computerMove === 'scissors') {
                    result = 'You Lose';
                }
            }
            else {
                if (computerMove === 'rock') {
                    result = 'You Lose';
                }
                else if (computerMove === 'paper') {
                    result = 'You Win';
                }
                else if (computerMove === 'scissors') {
                    result = 'Tie';
                }
            }
            if(result==="You Win"){
                score.Win+=1;
            }
            else if(result==="Tie"){
                score.Tie+=1;
            }
            else{
                score.Lose+=1;
            }
            
            localStorage.setItem('score', JSON.stringify(score));
            updateScore();
            document.querySelector('.js-move').innerHTML= `You:
        <img class="live-move" src="icons/${player_move}-emoji.png">
        Computer:
        <img class="live-move" src="icons/${computerMove}-emoji.png">
            `;}
        
        function updateScore(){
            document.querySelector('.js-status').innerHTML=`${result}`;
            if (result=='You Win'){
                document.querySelector('.js-status').style.color='green';
            }
            else if(result=='Tie'){
                document.querySelector('.js-status').style.color='yellow';
            }
            else if(result=='You Lose'){
                document.querySelector('.js-status').style.color='red';
            }
            //document.querySelector('.js-move').innerHTML=`Your Move- ${player_move}\n. Computer's Move -${computerMove}`;
            document.querySelector('.js-score').innerHTML=`Win:${score.Win}  Tie:${score.Tie}  Lose:${score.Lose}`;
            //will not work cause player_move & computerMove are out of scope,Thus java throes a reference error.
        }

        /* Don't declare the variable in function as then it will only have local scpe only inside function
        and will not exists outside the function*/
        //1. as local storage only store strings that's why we change object to JSON.stringify and set storage here.