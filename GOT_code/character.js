function getInfo(id){
    fetch("https://anapioficeandfire.com/api/characters/" + id)
.then(response => response.json())
.then(charInfo => populateCard(charInfo));
}

function populateCard(character){
    document.getElementById("moreInfoWrapper").innerHTML = "";

    document.getElementById("moreInfoWrapper").innerHTML += `<div class="character-info">
    <p>Character Name: ${character.name}</p>
    <p>Gender: ${character.gender}</p>
    <p>Title: ${character.titles}</p>
    </div>`
}

for(i=1; i<11; i++){
    let button = document.getElementById(`btn${i}`);
    button.onclick = saveTokens;
    function saveTokens(){
        if ("playerToken1" in sessionStorage) {
            sessionStorage.setItem("playerToken2", this.getAttribute("data-image"));
            if ("playerToken1" in sessionStorage && "playerToken2" in sessionStorage) {
                document.getElementById("instructions").innerHTML = `<a href="board.html"><button class="start-btn">Start Game</button></a>`
            }
        } else {
            sessionStorage.setItem("playerToken1", this.getAttribute("data-image"));
        }
    }
}

