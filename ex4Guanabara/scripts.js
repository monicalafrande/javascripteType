function comecar() {
  let nome = prompt("Digite seu nome:");
  let resultado = document.querySelector(".resultado");
  
  resultado.innerHTML = `<p>Olá <strong>${nome}</strong>! É um grande prazer te conhecer!</p>`
}
