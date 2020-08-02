// console.log('app.js loaded for tic tac toe')
// if (typeof $ == 'undefined'){
//     console.log('oops! I still have to link my jQuery properly!');
//   } else {console.log('I did it! I linked jQuery and this js file properly!')};


// Variables
let player = 1;
const $cell = $('.cell');

// Event handler
const changeStatus = (event)=>{
    let $cellSelected = $(event.currentTarget);
    if ($cellSelected.hasClass('x') || $cellSelected.hasClass('o')){
        alert('Already used! Please select another box.');
    }else{
        if(player === 1){
            $cellSelected.addClass('x').text('x');
            // set player to 2
            player = 2;
        }else{
            $cellSelected.addClass('o').text('o');
            // set player back to 1
            player = 1;
        }
    }
}

// Event listener
$cell.on('click', changeStatus);
