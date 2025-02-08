document.querySelector(".formulario").addEventListener("submit", function (e) {
  e.preventDefault(); // Impede o recarregamento da página
  calcular();
});

const peso = document.querySelector("#peso");
const altura = document.querySelector("#altura");
const divResultado = document.querySelector(".resultado");

function criarParagrafo(msg, classe) {
  divResultado.innerHTML = ""; // Limpa resultados anteriores
  const paragrafo = document.createElement("p");
  paragrafo.innerHTML = msg;

  // Remove classes antigas antes de adicionar a nova
  divResultado.classList.remove(
    "resultado-bom",
    "resultado-alerta",
    "resultado-ruim"
  );
  divResultado.classList.add(classe);

  divResultado.appendChild(paragrafo);
}

function calcular() {
  const pesoValor = parseFloat(peso.value);
  const alturaValor = parseFloat(altura.value);

  if (isNaN(pesoValor) || isNaN(alturaValor) || alturaValor <= 0) {
    criarParagrafo("⚠️ Por favor, insira valores válidos.", "resultado-alerta");
    return;
  }

  const imc = pesoValor / Math.pow(alturaValor, 2);
  let mensagem = `O seu IMC é ${imc.toFixed(2)} `;
  let classe = "";

  if (imc < 18.5) {
    mensagem += "(Abaixo do peso)";
    classe = "resultado-alerta"; // Amarelo
  } else if (imc >= 18.5 && imc <= 24.9) {
    mensagem += "(Peso ideal)";
    classe = "resultado-bom"; // Verde
  } else if (imc >= 25 && imc <= 29.9) {
    mensagem += "(Sobrepeso)";
    classe = "resultado-alerta"; // Amarelo
  } else if (imc >= 30 && imc <= 34.9) {
    mensagem += "(Obesidade grau I)";
    classe = "resultado-ruim"; // Vermelho
  } else if (imc >= 35 && imc <= 39.9) {
    mensagem += "(Obesidade grau II)";
    classe = "resultado-ruim"; // Vermelho
  } else {
    mensagem += "(Obesidade grau III)";
    classe = "resultado-ruim"; // Vermelho
  }

  criarParagrafo(mensagem, classe);
}
