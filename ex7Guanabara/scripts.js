function comecar() {
  let nome = prompt("Qual é o nome do aluno?");
  let nota1 = prompt(`Qual foi a primeira nota de ${nome}?`);
  let nota2 = prompt(`Qual foi a segunda nota de ${nome}?`);
  let media = (nota1 + nota2) / 2;

  let resultado = document.querySelector(".resultado");
  resultado.innerHTML = `<p>Calculando a média final de ${nome}.</p>`;
  resultado.innerHTML += `<p>As notas obtidas foram ${nota1} e ${nota2}.</p>`
  resultado.innerHTML += `<p>A média final será ${media}.</p>`
}
