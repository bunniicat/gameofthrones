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





