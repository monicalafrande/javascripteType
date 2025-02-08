function comecar() {
  let n1 = Number(prompt("Digite outro número:"));
  let n2 = Number(prompt("Digite outro número:"));
  let soma = n1 + n2;

  let resultado = document.querySelector(".resultado");
  resultado.innerHTML = `<p>A soma entre ${n1} e ${n2} é igual a <strong>${soma}</strong>!</p>`
}
