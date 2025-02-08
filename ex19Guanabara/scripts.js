function comecar() {
  let numero1 = Number(prompt("Digite um número:"));
  let numero2 = Number(prompt("Digite outro número:"));
  let operacao = Number(
    prompt(
      `Valores informados: ${numero1} e ${numero2}.\n O que vamos fazer? Digite um número conforme a operação desejada: \n [1]Somar \n [2]Subtrair \n [3]Multiplicar \n [4]Dividir`
    )
  );

  let resultado = document.querySelector(".resultado");
  resultado.innerHTML =
    "<p style='font-family: cursive; font-weight: bold'>Calculando...</p>";

  if (operacao === 1) {
    resultado.innerHTML += `<p>${numero1} + ${numero2} = <strong>${
        numero1 + numero2
      }</Strong></p>`;
  } else if (operacao === 2) {
    resultado.innerHTML += `<p>${numero1} - ${numero2} = <strong>${
        numero1 - numero2
      }</Strong></p>`;
  } else if (operacao === 3) {
    resultado.innerHTML += `<p>${numero1} x ${numero2} = <strong>${
        numero1 * numero2
      }</Strong></p>`;
  } else if (operacao === 4) {
    resultado.innerHTML += `<p>${numero1} ÷ ${numero2} = <strong>${
        numero1 / numero2
      }</Strong></p>`;
  } else {
    resultado.innerHTML += `Opção inválida! Você digitou <strong>${numero1}</Strong> e <strong>${numero2}</Strong>, mas não sei o que fazer com eles.`;
  }
}

// Poderia também ser feito com switch
