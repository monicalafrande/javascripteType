let adivinhar = Math.floor(Math.random() * 100 + 1);

function comecar() {
  let numero = Number(prompt("Qual é o seu palpite?"));
  let resultado = document.querySelector(".resultado");
  let comecar = document.querySelector(".comecar");

  if (numero < adivinhar) {
    resultado.innerHTML += `<p>Você falou ${numero}. Meu número é <strong>MAIOR!</strong></p>`;
  } else if (numero > adivinhar) {
    resultado.innerHTML += `<p>Você falou ${numero}. Meu número é <strong>MENOR!</strong></p>`;
  } else {
    resultado.innerHTML += `<p>Parabéns! Você acertou! Eu tinha sorteado o número <strong>${adivinhar}</strong></p>`;
    comecar.style.visibility = "hidden";
  }
}
