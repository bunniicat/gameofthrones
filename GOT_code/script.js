let diceValue;

const playerOne = {
    tile: 0,
    playerTurn: true
};

const playerTwo = {
    tile: 0,
    playerTurn: false
};

function theBoard(){
    for(i=1; i<31; i++){
        document.getElementById("board-wrapper").innerHTML += `<div id="tile${i}" class="board-tile">
        </div>`
    }
}

theBoard();

const roll = document.querySelector('#roll');

roll.addEventListener('click', () => {
    diceValue = 10;
    
    if (playerOne.playerTurn === true) {
        document.getElementById(`tile${playerOne.tile}`).innerHTML = "";
        playerOne.tile = playerOne.tile + diceValue;
        document.getElementById(`tile${playerOne.tile}`).innerHTML += `<img src="bunny.png">`
        console.log(playerOne.tile);
        playerOne.playerTurn = false;
        
    } else {
        document.getElementById(`tile${playerTwo.tile}`).innerHTML = "";
        playerTwo.tile = playerTwo.tile + diceValue;
        document.getElementById(`tile${playerTwo.tile}`).innerHTML += `Second Player`
        console.log(playerTwo.tile);
        playerOne.playerTurn = true;
    }

    trapOne();
})


function trapOne(){
    if (playerOne.tile === 10) {
        alert('Fuck off!!')
        setTimeout(() => {
            document.getElementById(`tile${playerOne.tile}`).innerHTML = "";
            playerOne.tile = playerOne.tile -= 5;
            document.getElementById(`tile${playerOne.tile}`).innerHTML += `<img src="bunny.png">`
            console.log(playerOne.tile);
        }, 2000)
            
    }

}
