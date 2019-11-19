let diceValue;

const playerOne = {
    tile: 1,
    playerTurn: true,
    playerToken: sessionStorage.getItem("playerToken1"),
    tokenId: 1
};

const playerTwo = {
    tile: 1,
    playerTurn: false,
    playerToken: sessionStorage.getItem("playerToken2"),
    tokenId: 2
};

console.log(playerOne.playerToken);
console.log(playerTwo.playerToken);

function theBoard(){
    for(i=1; i<31; i++){
        document.getElementById("board-wrapper").innerHTML += `<div id="tile${i}" class="board-tile">
        </div>`
    }
}

theBoard();

 function placeToken(){
    document.getElementById(`tile${playerOne.tile}`).innerHTML += `<div id="token1${playerOne.tile}"> <img src="${playerOne.playerToken}"> </div>`
    document.getElementById(`tile${playerTwo.tile}`).innerHTML += `<div id="token2${playerTwo.tile}"> <img src="${playerTwo.playerToken}"> </div>`
}

placeToken();

const roll = document.querySelector('#roll');

roll.addEventListener('click', () => {
    diceValue = Math.ceil(Math.random() * 6); 
    
    if (playerOne.playerTurn === true) {
        document.getElementById(`token1${playerOne.tile}`).innerHTML = "";
        playerOne.tile = playerOne.tile + diceValue;
        document.getElementById(`tile${playerOne.tile}`).innerHTML += `<div id="token1${playerOne.tile}"> <img src="${playerOne.playerToken}"> </div>`
        if (diceValue != 6){
            playerOne.playerTurn = false;
        }
        
    } else {
        document.getElementById(`token2${playerTwo.tile}`).innerHTML = "";
        playerTwo.tile = playerTwo.tile + diceValue;
        document.getElementById(`tile${playerTwo.tile}`).innerHTML += `<div id="token2${playerTwo.tile}"> <img src="${playerTwo.playerToken}" </div>`
        if (diceValue != 6){
            playerOne.playerTurn = true;
        }
    }

    traps(playerOne, playerOne.tokenId);
    traps(playerTwo, playerTwo.tokenId);
})

function remove(elem){
    elem.parentElement.removeChild(elem)
}

function traps(player, tokenid){
switch(player.tile){
    case 10:
        alert ("Fuck you 10")
        console.log(tokenid);
        console.log(player.tile);
        remove(document.getElementById(`token${tokenid}${player.tile}`))
        player.tile = player.tile -= 5;
        document.getElementById(`tile${player.tile}`).innerHTML += `<div id="token${tokenid}${player.tile}"> <img src="${player.playerToken}">  </div>`
        break;
    case 22:
        alert ("Fuck you 22")
        console.log(tokenid);
        console.log(player.tile);
        remove(document.getElementById(`token${tokenid}${player.tile}`))
        player.tile = player.tile -= 8;
        document.getElementById(`tile${player.tile}`).innerHTML += `<div id="token${tokenid}${player.tile}"> <img src="${player.playerToken}">  </div>`
        break;
    case 16:
        alert ("Fuck you 16")
        console.log(tokenid);
        console.log(player.tile);
        remove(document.getElementById(`token${tokenid}${player.tile}`))
        player.tile = player.tile -= 4;
        document.getElementById(`tile${player.tile}`).innerHTML += `<div id="token${tokenid}${player.tile}"> <img src="${player.playerToken}">  </div>`
        break;
    case 18:
        alert ("Woooo 18")
        console.log(tokenid);
        console.log(player.tile);
        remove(document.getElementById(`token${tokenid}${player.tile}`))
        player.tile = player.tile += 2;
        document.getElementById(`tile${player.tile}`).innerHTML += `<div id="token${tokenid}${player.tile}"> <img src="${player.playerToken}">  </div>`
        break;
    case 25:
        alert ("Fuck you 25")
        console.log(tokenid);
        console.log(player.tile);
        remove(document.getElementById(`token${tokenid}${player.tile}`))
        player.tile = player.tile -= 4;
        document.getElementById(`tile${player.tile}`).innerHTML += `<div id="token${tokenid}${player.tile}"> <img src="${player.playerToken}">  </div>`
        break;
    }
}
 