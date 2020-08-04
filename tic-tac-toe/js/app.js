// ===== Checking Linked JS and JQuery ===== //
// console.log('app.js loaded for tic tac toe')
// if (typeof $ == 'undefined'){
//     console.log('oops! I still have to link my jQuery properly!');
//   } else {console.log('I did it! I linked jQuery and this js file properly!')};


// ===== Variables ===== //
let player = 1;
const $cell = $('.cell');
const $restart = $('#restart');
let playerWon = false;
let clickCounter = 0;

// ===== Function To Start The Game ===== //
const startGame = () => {
    alert('Hi There! Welcome to Tic Tac Toe!')
    alert('The game is set as player vs. player. The first player will play with "X" and the seconde player will play with "Y". Once you decide who start first, click OK to get started. Happy Gaming!')
}

// ===== Change Status of Cells Function ===== //
// This function is handler to clicks on game board cells. It check for a click and give a class and text of X if player = 1 and class and text of O if player = 2. Also, it calls check win and check tie functions to alert status and next steps.
const changeStatus = (event) => {
    let $cellSelected = $(event.currentTarget);
    if ($cellSelected.hasClass('x') || $cellSelected.hasClass('o')) {
        alert('Already used! Please select another box.');
    } else {
        if ((player === 1) && (playerWon === false)) {
            $cellSelected.addClass('x').text('x');
            clickCounter++;// increment clickCounter by one to check for tie later
            // check if player 1 won
            if (checkWin('x')) {
                // to wait for the mark X to show before the alert
                setTimeout(() => { alert('X Won! Congrats!'), 1000 });
                // to stop player 1 from adding Xs to empty cells after winning
                playerWon = true;
                setTimeout(() => { alert('Another round?! Click "Restart!"'), 2000 });
                //check for tie
            } else if (checkTie()) {

            } else {
                // set player to 2
                player = 2;
            }
        } else {
            if ((player === 2) && (playerWon === false)) {
                $cellSelected.addClass('o').text('o');
                clickCounter++;
                // check if player 2 won
                if (checkWin('o')) {
                    // to wait for the mark O to show before the alert
                    setTimeout(() => { alert('O Won! Congrats!'), 1000 });
                    // to stop player 2 from adding Os to empty cells after winning
                    playerWon = true;
                    setTimeout(() => { alert('Another round?! Click "Restart!"'), 2000 });
                } else {
                    // set player back to 1
                    player = 1;
                }
            }
        }
    }
}

// ===== Win Function ===== //
// There are 8 ways to win. If 3 cells on the same row, colum, or diagonal has the same text, then we have a winner!
const checkWin = (text) => {
    //check win for each row(3)
    if ($('#0').hasClass(text) && $('#1').hasClass(text) && $('#2').hasClass(text)) {
        return true;
    } else if ($('#3').hasClass(text) && $('#4').hasClass(text) && $('#5').hasClass(text)) {
        return true;
    } else if ($('#6').hasClass(text) && $('#7').hasClass(text) && $('#8').hasClass(text)) {
        return true;
        //check win for each colum(3)
    } else if ($('#0').hasClass(text) && $('#3').hasClass(text) && $('#6').hasClass(text)) {
        return true;
    } else if ($('#1').hasClass(text) && $('#4').hasClass(text) && $('#7').hasClass(text)) {
        return true;
    } else if ($('#2').hasClass(text) && $('#5').hasClass(text) && $('#8').hasClass(text)) {
        return true;
        //check win for diagonals (2)
    } else if ($('#0').hasClass(text) && $('#4').hasClass(text) && $('#8').hasClass(text)) {
        return true;
    } else if ($('#2').hasClass(text) && $('#4').hasClass(text) && $('#6').hasClass(text)) {
        return true;
    } else {// cells are empty
        return false;
    }

}

// ===== Check Tie Function ===== //
// If players click on all 9 cells and checkWin is false then that's a tie.
const checkTie = () => {
    if ((clickCounter === 9) && (checkWin() === false)) {
        setTimeout(() => { alert("It's a tie! Click 'Restart' to play again!"), 1000 });
    }
}

// ===== Restart Button Function ===== //
const restartGame = () => {
    location.reload();
}

// ===== Event listeners ===== //
$cell.on('click', changeStatus);
$restart.on('click', restartGame)

// ===== Invoking Start Game Function ===== //
// startGame();
