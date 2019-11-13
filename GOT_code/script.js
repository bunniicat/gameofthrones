let diceValue;

const playerOne = {
    tile: 1,
    playerTurn: true,
    playerToken: /* "Get this from local storage" ?? */
};

const playerTwo = {
    tile: 1,
    playerTurn: false,
    playerToken: /* "Get this from local storage" ?? */
};

function theBoard(){
    for(i=1; i<31; i++){
        document.getElementById("board-wrapper").innerHTML += `<div id="tile${i}" class="board-tile">
        </div>`
    }
}

theBoard();

 function placeToken(){
    document.getElementById(`tile${playerOne.tile}`).innerHTML += `<div id="token1${playerOne.tile}"> <img src="bunny.png"> </div>`
    document.getElementById(`tile${playerTwo.tile}`).innerHTML += `<div id="token2${playerTwo.tile}"> "Second Player" </div>`
}

placeToken(); 

const roll = document.querySelector('#roll');

roll.addEventListener('click', () => {
    diceValue = Math.ceil(Math.random() * 6);
    console.log(diceValue);
    /* diceValue = 9; */
    
    if (playerOne.playerTurn === true) {
        document.getElementById(`token1${playerOne.tile}`).innerHTML = "";
        playerOne.tile = playerOne.tile + diceValue;
        document.getElementById(`tile${playerOne.tile}`).innerHTML += `<div id="token1${playerOne.tile}"> <img src="bunny.png"> </div>`
        /* console.log(playerOne.tile); */
        if (diceValue != 6){
            playerOne.playerTurn = false;
        }
        
    } else {
        document.getElementById(`token2${playerTwo.tile}`).innerHTML = "";
        playerTwo.tile = playerTwo.tile + diceValue;
        document.getElementById(`tile${playerTwo.tile}`).innerHTML += `<div id="token2${playerTwo.tile}"> "Second Player" </div>`
        /* console.log(playerTwo.tile); */
        if (diceValue != 6){
            playerOne.playerTurn = true;
        }
    }

    traps();
})

function traps(){
switch(playerOne.tile){
    case 10:
        alert ("Fuck you")
        setTimeout(() =>{
            document.getElementById(`token1${playerOne.tile}`).innerHTML = "";
            playerOne.tile = playerOne.tile -= 5;
            document.getElementById(`tile${playerOne.tile}`).innerHTML += `<div id="token1${playerOne.tile}"> <img src="bunny.png"> </div>`
            console.log("trap one");
        }, 2000)
}
}
 