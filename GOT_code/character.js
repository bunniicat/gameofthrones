var bioo;

function getInfo(id) {
    fetch("https://anapioficeandfire.com/api/characters/" + id)
        .then(response => response.json())
        .then(charInfo => populateCard(charInfo));
}



const popup = document.getElementById("popup");

function populateCard(character) {
    popup.style.display = "block";
    const getName = character.name.replace(/\s/g, '');
    console.log(getName);
    bio(getName)
    document.getElementById("popupInfo").innerHTML = "";
    document.getElementById("popupInfo").innerHTML += `<div class="character-info">
    <p class="character-bio">CHARACTER INFORMATION</p>
    <p>Character Name: ${character.name}</p>
    <p>Gender: ${character.gender}</p>
    <p>Born: ${character.born}</p>
    <p>Title: ${character.titles}</p>
    <br>
    <p class="character-bio">BIOGRAPHY:</p>
    <p class="character-bio-text">${bioo}</p>
    <div id="character-btn" class="character-bio-btn" onclick="selectChar()" data-select="${getName}"><img src="resources/symbols/like.svg"> </div>
    </div>`
}

window.onclick = function (event) {
    if (event.target == popup) {
        popup.style.display = "none";
    }
}

function bio(charName){
    switch(charName){
        case "PetyrBaelish":
            bioo = "I'm probably in love with your mum, but I will make you queen."
        break;
        case "CerseiLannister":
            bioo = "Swipe right or die."
        break;
        case "DaenerysTargaryen":
            bioo = "Come find out why they call me mad queen."
        break;
        case "SansaStark":
            bioo = "Been married a few times but nothing serious, not looking for another little finger in my life."
        break;
        case "Drogo":
            bioo = "The dothraki have no word for hair cut."
        break;
        case "GreyWorm":
            bioo = "Saw the love of my life get executed, not looking for anything serious atm."
        break;
        case "Melisandre":
            bioo = "Sometimes I light people on fire."
        break;
        case "AryaStark":
            bioo = "A girl has no preference."
        break;
        case "MargaeryTyrell":
            bioo = "My best relationship was with a gay man." 
        break;
    }
}


/* const PetyrBaelishbio = "I'm probably in love with your mum, but I will make you queen."
const CerseiLannisterbio = "Swipe right or die."
const DaenerysTargaryenbio = "Come find out why they call me mad queen."
const SansaStarkbio = "Been married a few times but nothing serious, not looking for another little finger in my life."
const Drogobio = "The dothraki have no word for hair cut."
const GreyWormbio = "Saw the love of my life get executed, not looking for anything serious atm."
const Melisandrebio = "Sometimes I light people on fire."
const AryaStarkbio = "A girl has no preference."
const MargaeryTyrellbio = "My best relationship was with a gay man."  */

function selectChar() {
    const btn = document.querySelector("#character-btn");
    theData = btn.getAttribute("data-select");
    sessionStorage.setItem("yourMatch", theData);
    popup.style.display = "none";
    if ("yourMatch" in sessionStorage) {
        document.querySelector("#instructions").innerHTML = "";
        document.querySelector("#instructions").innerHTML += `<a href="board.html"><button class="start-btn"> Woo your match! </button></a> `
    }
}