function comecar() {
  let resultado = document.querySelector(".resultado");
  resultado.innerHTML +=
    "<p style='font-family: cursive; font-weight: bold;'>Contagem Regressiva de 10 a 1:</p>";

  let contador = 10;
  while (contador > 0) {
    resultado.innerHTML += ` ${contador} `;
    contador--;
  }
}
