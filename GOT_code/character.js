function getInfo(id) {
    fetch("https://anapioficeandfire.com/api/characters/" + id)
        .then(response => response.json())
        .then(charInfo => populateCard(charInfo));
}



const popup = document.getElementById("popup");

function populateCard(character) {
    popup.style.display = "block";
    const getName = character.name.replace(/\s/g, '');
    let getBio = getNameBio;
    getBio = getBio;
    console.log(getBio);
    document.getElementById("popupInfo").innerHTML = "";
    document.getElementById("popupInfo").innerHTML += `<div class="character-info">
    <p>Character Name: ${character.name}</p>
    <p>Gender: ${character.gender}</p>
    <p>Born: ${character.born}</p>
    <p>Title: ${character.titles}</p>
    <br>
    <p class="character-bio">BIOGRAPHY:</p>
    <p class="character-bio-text">${getBio}</p>
    <button id="character-btn" onclick="selectChar()" data-select="${getName}">xxxxx</button>
    </div>`
}

window.onclick = function (event) {
    if (event.target == popup) {
        popup.style.display = "none";
    }
}

const PetyrBaelishbio = "I'm probably in love with your mum, but I will make you queen."
const CerseiLannisterbio = "Swipe right or die."
const DaenerysTargaryenbio = "Come find out why they call me mad queen."
const SansaStarkbio = "Been married a few times but nothing serious, not looking for another little finger in my life."
const Drogobio = "The dothraki have no word for hair cut."
const GreyWormbio = "Saw the love of my life get executed, not looking for anything serious atm."
const Melisandrebio = "Sometimes I light people on fire."
const AryaStarkbio = "A girl has no preference."
const MargaeryTyrellbio = "My best relationship was with a gay man." 

function selectChar() {
    const btn = document.querySelector("#character-btn");
    theData = btn.getAttribute("data-select");
    sessionStorage.setItem("yourMatch", theData);
}