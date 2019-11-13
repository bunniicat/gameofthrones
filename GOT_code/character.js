function getInfo(id){
    fetch("https://anapioficeandfire.com/api/characters/" + id)
.then(response => response.json())
.then(charInfo => console.log(charInfo));
}



