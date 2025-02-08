function comecar() {
  let resultado = document.querySelector(".resultado");
  resultado.innerHTML +=
    "<p style='font-family: cursive; font-weight: bold;'>Contando de 1 até 10, marcando os pares:</p>";

  let contador = 1;
  while (contador <= 10) {
    if (contador % 2 == 0) {
      resultado.innerHTML += `<span style='color: red; font-weight: bold;'> ${contador} </span>`;
    } else {
      resultado.innerHTML += contador;
    }
    contador++;
  }
}
