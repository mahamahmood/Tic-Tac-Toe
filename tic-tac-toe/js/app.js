// console.log('app.js loaded for tic tac toe')
// if (typeof $ == 'undefined'){
//     console.log('oops! I still have to link my jQuery properly!');
//   } else {console.log('I did it! I linked jQuery and this js file properly!')};


// Variables
let player = 1;
const $cell = $('.cell');

// ===== Function To Start The Game =====
const startGame = ()=>{
    alert('Hi There! Welcome to Tic Tac Toe!')
    alert('The game is set as player vs. player. The first player will play with "X" and the seconde player will play with "Y". Once you decide who start first, click OK to get started. Happy Gaming!')
}
// ===== Change Status of Cells Function =====
const changeStatus = (event)=>{
    let $cellSelected = $(event.currentTarget);
    if ($cellSelected.hasClass('x') || $cellSelected.hasClass('o')){
        alert('Already used! Please select another box.');
    }else{
        if(player === 1){
            $cellSelected.addClass('x').text('x');
            // check if player 1 won
            if(checkWin('x')){
                alert('X Won! Congrats!')
            }else{
                // set player to 2
                player = 2;
            }
        }else{
            $cellSelected.addClass('o').text('o');
            // check if player 2 won
            if(checkWin('o')){
                alert('O won! Congrats!')
            }else{
                // set player back to 1
                player = 1;
            }
            
        }
    }
}
// ===== Win Function =====
// There are 8 ways to win. If 3 cells on the same row, colum, or diagonal has the same text, then we have a winner!

const checkWin = (text)=>{
    //check win for each row(3)
    if($('#0').hasClass(text) && $('#1').hasClass(text) && $('#2').hasClass(text)){
        return true;
    }else if($('#3').hasClass(text) && $('#4').hasClass(text) && $('#5').hasClass(text)){
        return true;
    }else if($('#6').hasClass(text) && $('#7').hasClass(text) && $('#8').hasClass(text)){
        return true;
    //check win for each colum(3)
    }else if($('#0').hasClass(text) && $('#3').hasClass(text) && $('#6').hasClass(text)){
        return true;
    }else if($('#1').hasClass(text) && $('#4').hasClass(text) && $('#7').hasClass(text)){
        return true;
    }else if($('#2').hasClass(text) && $('#5').hasClass(text) && $('#8').hasClass(text)){
        return true;
    //check win for diagonals (2)
    }else if($('#0').hasClass(text) && $('#4').hasClass(text) && $('#8').hasClass(text)){
        return true;
    }else if($('#2').hasClass(text) && $('#4').hasClass(text) && $('#6').hasClass(text)){
        return true;
    }else{
        return false;
    }
    
}


// Event listener
$cell.on('click', changeStatus);

// startGame();
