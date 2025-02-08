function comecar() {
  let numero = prompt("Digite um número:");
  let dobro = numero * 2;
  let metade = numero / 2;

  let resultado = document.querySelector(".resultado");

  resultado.innerHTML = `<p>O dobro de ${numero} é ${dobro} e a metade é ${metade}!`;
}
