let contador = 0;
let resultado = document.querySelector(".resultado");

function comecar() {
  contador++;
  resultado.innerHTML = `<p>O contador está com ${contador} cliques.</p>`;
}

function zerar() {
  contador = 0;
  resultado.innerHTML = `<p>O contador está com ${contador} cliques.</p>`;
}
