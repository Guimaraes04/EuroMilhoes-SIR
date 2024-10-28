// const apiURL = 'http://localhost:3000/'
const apiURL = "/";

window.addEventListener('load', function() {
    atualizarChave();
})

function atualizarChave() {
    let numbers = document.getElementById("numbers");
    let stars = document.getElementById("stars");

    getEuromilhoesKey().then(json => {
        numbers.innerHTML = json.key.numbers;
        stars.innerHTML = json.key.stars;
    });
}

async function getEuromilhoesKey() {
    let response = await fetch(apiURL + "generateKey");
    let json = await response.json();
    return json;
}

