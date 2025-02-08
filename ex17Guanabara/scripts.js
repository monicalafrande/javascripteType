let resultado = document.querySelector(".resultado");

function comecar() {
    let numero = Math.floor(Math.random() * 100 + 1);
    
    resultado.innerHTML += `<p>Acabei de pensar no número <strong>${numero}</strong>!</p>`
}

function zerar() {
    resultado.innerHTML = null;
}