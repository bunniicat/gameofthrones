let diceValue;

const playerOne = {
    tile: 1,
    playerTurn: true,
    playerToken: sessionStorage.getItem("playerToken1"),
    tokenId: 1,
    playerName: "Player One"
};

const playerTwo = {
    tile: 1,
    playerTurn: false,
    playerToken: sessionStorage.getItem("playerToken2"),
    tokenId: 2,
    playerName: "Player Two"
};

console.log(playerOne.playerToken);
console.log(playerTwo.playerToken);

function theBoard(){
    for(i=1; i<31; i++){
        document.getElementById("board-wrapper").innerHTML += `<div id="tile${i}" class="board-tile">
        </div>`
    }
}

function remove(elem){
    elem.parentElement.removeChild(elem)
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
        let elem = document.getElementById(`token1${playerOne.tile}`);
        elem.parentElement.removeChild(elem);
        playerOne.tile = playerOne.tile + diceValue;
        goal(playerOne);
        document.getElementById(`tile${playerOne.tile}`).innerHTML += `<div id="token1${playerOne.tile}" class="fadeIn"> <img src="${playerOne.playerToken}"> </div>`
        if (diceValue != 6){
            playerOne.playerTurn = false;
        }
        
    } else {
        let elem1 = document.getElementById(`token2${playerTwo.tile}`);
        elem1.parentElement.removeChild(elem1);
        playerTwo.tile = playerTwo.tile + diceValue;
        goal(playerTwo);
        document.getElementById(`tile${playerTwo.tile}`).innerHTML += `<div id="token2${playerTwo.tile}" class="fadeIn"> <img src="${playerTwo.playerToken}" </div>`
        if (diceValue != 6){
            playerOne.playerTurn = true;
        }
    }

    traps(playerOne, playerOne.tokenId);
    traps(playerTwo, playerTwo.tokenId);
})



function traps(player, tokenid){
switch(player.tile){
    case 10:
        alert ("You got pushed out of a window, you land at tile 5, have fun in a wheelchair")
        console.log(tokenid);
        console.log(player.tile);
        remove(document.getElementById(`token${tokenid}${player.tile}`))
        player.tile = player.tile -= 5;
        document.getElementById(`tile${player.tile}`).innerHTML += `<div id="token${tokenid}${player.tile}"> <img src="${player.playerToken}">  </div>`
        break;
    case 22:
        alert ("One of your dragons die, you are not a great pet caretaker, as punishment go back 8 tiles")
        console.log(tokenid);
        console.log(player.tile);
        remove(document.getElementById(`token${tokenid}${player.tile}`))
        player.tile = player.tile -= 8;
        document.getElementById(`tile${player.tile}`).innerHTML += `<div id="token${tokenid}${player.tile}"> <img src="${player.playerToken}">  </div>`
        break;
    case 16:
        alert ("Your whole family gets slaughtered at a wedding, you go back 4 tiles while mourning their deaths")
        console.log(tokenid);
        console.log(player.tile);
        remove(document.getElementById(`token${tokenid}${player.tile}`))
        player.tile = player.tile -= 4;
        document.getElementById(`tile${player.tile}`).innerHTML += `<div id="token${tokenid}${player.tile}"> <img src="${player.playerToken}">  </div>`
        break;
    case 18:
        alert ("You freed all the slaves, +2 tiles for you!")
        console.log(tokenid);
        console.log(player.tile);
        remove(document.getElementById(`token${tokenid}${player.tile}`))
        player.tile = player.tile += 2;
        document.getElementById(`tile${player.tile}`).innerHTML += `<div id="token${tokenid}${player.tile}"> <img src="${player.playerToken}">  </div>`
        break;
    case 25:
        alert ("Jon gets killed by his squire, f*ck Olly, and f*ck you -move back 4 tiles")
        console.log(tokenid);
        console.log(player.tile);
        remove(document.getElementById(`token${tokenid}${player.tile}`))
        player.tile = player.tile -= 4;
        document.getElementById(`tile${player.tile}`).innerHTML += `<div id="token${tokenid}${player.tile}"> <img src="${player.playerToken}">  </div>`
        break;
    }
}

function announceWinner(){
    if("winner" in sessionStorage){
        const popup = document.getElementById("popup");
        popup.style.display = "block";
        winnerName = sessionStorage.getItem("winner");
        winnerAvatar = sessionStorage.getItem("winnerToken");
        document.getElementById("winner").innerHTML += `<div class="winnerAnnouncement">Congratulations, ${winnerName}!</div>
        <div class="winnerToken"><img src="${winnerAvatar}"></div>
        <div class="playAgainBtn"><a href="character-select.html"><button onclick="playAgain()">Play again</button></a></div>`
    }
} 

function goal(player){
    if(player.tile >= 30){
        player.tile = 30
        sessionStorage.setItem("winner", player.playerName)
        sessionStorage.setItem("winnerToken", player.playerToken)
        announceWinner();
    }
}

function playAgain(){
    sessionStorage.clear();
}
