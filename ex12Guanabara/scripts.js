function comecar() {
  let numero = Number(prompt("Digite um número:"));
  let parImpar;

  if (numero % 2 === 0) {
    parImpar = "PAR";
  } else {
    parImpar = "ÍMPAR";
  }

  let resultado = document.querySelector(".resultado");

  resultado.innerHTML = `<p>O número digitado foi <strong>${numero}</strong>, e ele é <strong>${parImpar}!</strong></p>`;
}
