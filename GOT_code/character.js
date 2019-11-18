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

/* function saveTokens(selectedToken){
    if ("playerToken1" in sessionStorage) {
        sessionStorage.setItem("playerToken2", selectedToken);
        let token2 = sessionStorage.getItem("playerToken2");
        console.log(token2);
    } else {
        sessionStorage.setItem("playerToken1", selectedToken);
        let token1 = sessionStorage.getItem("playerToken1");
        console.log(token1);
    }
} */





for(i=1; i<4; i++){
    let button = document.getElementById(`button${i}`);
    button[i].onclick = saveTokens;
    function saveTokens(){
        sessionStorage.setItem("test", this.getAttribute("data-image"));
        let tested = sessionStorage.getItem("test");
        console.log(tested);
    }
}