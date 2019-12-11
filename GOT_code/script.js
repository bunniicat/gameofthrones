let diceValue;

let yourMatch = sessionStorage.getItem("yourMatch");

const playerOne = {
    tile: 1,
    playerTurn: true,
    playerToken: "resources/chars/7.svg",
    tokenId: 1
};

const playerTwo = {
    tile: 1,
    playerTurn: false,
    playerToken: "resources/symbols/unmatch.svg",
    tokenId: 2
};

function whoseTurn() {
    if (playerOne.playerTurn === true) {
        showTurn(playerOne);
    } else {
        showTurn(playerTwo);   
    }
}

function theBoard() {
    for (i = 1; i < 31; i++) {
        document.getElementById("board-wrapper").innerHTML += `<div id="tile${i}" class="board-tile"><p class="board-tile-number">Tile ${i}</p>
        </div>`
    }
    document.getElementById("tile10").classList.add("trap");
    document.getElementById("tile22").classList.add("trap");
    document.getElementById("tile16").classList.add("trap");
    document.getElementById("tile18").classList.add("trap");
    document.getElementById("tile25").classList.add("trap");
}

function remove(elem) {
    elem.parentElement.removeChild(elem)
}

theBoard();

function placeToken() {
    document.getElementById(`tile${playerOne.tile}`).innerHTML += `<div id="token1${playerOne.tile}" class="bounceIn"> <img src="${playerOne.playerToken}"> </div>`
    document.getElementById(`tile${playerTwo.tile}`).innerHTML += `<div id="token2${playerTwo.tile}" class="bounceIn"> <img src="${playerTwo.playerToken}"> </div>`
    document.getElementById("tile30").innerHTML += `<div class="match-tile"> <img src="resources/chars/${yourMatch}.svg"> </div>`
}

placeToken();

const roll = document.querySelector('#roll');

roll.addEventListener('click', () => {
    diceValue = Math.ceil(Math.random() * 6);

    if (playerOne.playerTurn === true) {
        movePlayers(playerOne, playerOne.tokenId);
        updateBar(playerOne.tile)
        if (diceValue != 6) {
            console.log("make it player 2 turns runs!")
            playerOne.playerTurn = false;
        }

    } else {
        movePlayers(playerTwo, playerTwo.tokenId);
        updateBarUnmatch(playerTwo.tile)
        if (diceValue != 6) {
            console.log("make it player 1 turns runs!")
            playerOne.playerTurn = true;
        }
    }

    traps(playerOne, playerOne.tokenId);
    traps(playerTwo, playerTwo.tokenId);
})

function movePlayers(player, tokenid) {
    let elem = document.getElementById(`token${tokenid}${player.tile}`);
    elem.parentElement.removeChild(elem);
    player.tile = player.tile + diceValue;
    goal(player);
    document.getElementById(`tile${player.tile}`).innerHTML += `<div id="token${tokenid}${player.tile}" class="bounceIn"> <img src="${player.playerToken}">  </div>`
}



function traps(player, tokenid) {
    switch (player.tile) {
        case 10:
            swal({
                title: "OUCH: SEEN",
                text: "Sorry mate, they left you on seen.. they are 5 steps closer to unmatching you and you need to step up your game.",
                imageUrl: "https://i.imgur.com/8pTfU1L.jpg",
                imageWidth: 500,
                imageHeight: 150,
                showCancelButton: false,
                confirmButtonText: "OK",
                confirmButtonColor: "#f68f9d",
            });
            remove(document.getElementById(`token2${playerTwo.tile}`))
            playerTwo.tile = playerTwo.tile += 5;
            document.getElementById(`tile${playerTwo.tile}`).innerHTML += `<div id="token1${playerTwo.tile}"> <img src="${playerTwo.playerToken}">  </div>`
            break;
        case 22:
            swal({
                title: "HEARTHTHROB: COOL TITLE",
                text: "Good job mate, flash that title for what its worth, you impressed your match! You are 2 steps closed to finding the love of your life.",
                imageUrl: "https://i.imgur.com/LZ5d7IV.jpg",
                imageWidth: 500,
                imageHeight: 200,
                showCancelButton: false,
                confirmButtonText: "OK",
                confirmButtonColor: "#f68f9d",
            });
            remove(document.getElementById(`token1${playerOne.tile}`))
            playerOne.tile = playerOne.tile += 2;
            document.getElementById(`tile${playerOne.tile}`).innerHTML += `<div id="token1${playerOne.tile}"> <img src="${playerOne.playerToken}">  </div>`
            break;
        case 16:
            swal({
                title: "OUCH: THE EX",
                text: "Too bad mate, this takes your match 4 steps closed to unmatching you.",
                imageUrl: "https://i.imgur.com/LZ5d7IV.jpg",
                imageWidth: 500,
                imageHeight: 200,
                showCancelButton: false,
                confirmButtonText: "OK",
                confirmButtonColor: "#f68f9d",
            });
            remove(document.getElementById(`token2${playerTwo.tile}`))
            playerTwo.tile = playerTwo.tile += 4;
            document.getElementById(`tile${playerTwo.tile}`).innerHTML += `<div id="token2${playerTwo.tile}"> <img src="${playerTwo.playerToken}"> </div>`
            break;
        case 18:
            swal({
                title: "You freed all the slaves, +2 tiles for you!",
                showCancelButton: false,
                confirmButtonText: "OK",
                confirmButtonColor: "#000000",
            });
            remove(document.getElementById(`token${tokenid}${player.tile}`))
            player.tile = player.tile += 2;
            document.getElementById(`tile${player.tile}`).innerHTML += `<div id="token${tokenid}${player.tile}"> <img src="${player.playerToken}">  </div>`
            break;
        case 25:
            swal({
                title: "Jon gets killed by his squire, f*ck Olly, and f*ck you -move back 4 tiles",
                showCancelButton: false,
                confirmButtonText: "OK",
                confirmButtonColor: "#000000",
            });
            remove(document.getElementById(`token${tokenid}${player.tile}`))
            player.tile = player.tile -= 4;
            document.getElementById(`tile${player.tile}`).innerHTML += `<div id="token${tokenid}${player.tile}"> <img src="${player.playerToken}">  </div>`
            break;
    }
}

function announceWinner() {
    if ("winner" in sessionStorage) {
        const popup = document.getElementById("popup");
        popup.style.display = "block";
        winnerName = sessionStorage.getItem("winner");
        winnerAvatar = sessionStorage.getItem("winnerToken");
        document.getElementById("winner").innerHTML += `<div class="winnerAnnouncement">Congratulations, ${winnerName}!</div>
        <div class="winnerToken"><img src="${winnerAvatar}"></div>
        <div class="playAgainBtn"><a href="character-select.html"><button onclick="playAgain()">Play again</button></a></div>`
    }
}

function goal(player) {
    if (player.tile >= 30) {
        player.tile = 30
        sessionStorage.setItem("winner", player.playerName)
        sessionStorage.setItem("winnerToken", player.playerToken)
        announceWinner();
    }
}

function playAgain() {
    sessionStorage.clear();
}

function updateBar(tile){
    var mathWidth =  tile * 3.33;
    var elem = document.getElementById("myBar");
    var displayProgress = document.getElementById("barProgress");
    elem.style.width = mathWidth + "%";
    var roundWidth = Math.ceil(mathWidth)
    displayProgress.innerHTML = "";
    displayProgress.innerHTML += `<p>Love Meter Match Progress: ${roundWidth}%</p>`;
}

function updateBarUnmatch(tile){
    var mathWidth = tile * 3.33;
    var elem = document.getElementById("myBarUnmatch");
    var displayProgress = document.getElementById("barProgressUnmatch");
    elem.style.width = mathWidth + "%";
    var roundWidth = Math.ceil(mathWidth);
    displayProgress.innerHTML = "";
    displayProgress.innerHTML += `<p>Unmatch Meter Match Progress: ${roundWidth}%</p>`;
}