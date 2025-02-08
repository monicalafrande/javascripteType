function comecar() {
  let numero1 = Number(prompt("Digite um número:"));
  let numero2 = Number(prompt("Digite outro número:"));

  let resultado = document.querySelector(".resultado");

  if (numero1 > numero2) {
    resultado.innerHTML = `Analisando os valores ${numero1} e ${numero2}, o maior valor é ${numero1}`;
  } else if (numero2 > numero1) {
    resultado.innerHTML = `Analisando os valores ${numero1} e ${numero2}, o maior valor é ${numero2}`;
  } else {
    resultado.innerHTML = `Analisando os valores ${numero1} e ${numero2}, e ambos são iguais`;
  }
}
