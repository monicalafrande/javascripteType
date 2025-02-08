function maior() {
  let n1 = Number(prompt("Digite o primeiro número: "));
  let n2 = Number(prompt("Digite o segundo número: "));

  return Math.max(n1, n2);
}

let corpo = document.querySelector(".corpo");
let paragrafo = document.createElement("p");
paragrafo.innerHTML = `O maior número é: ${maior()}`;
corpo.appendChild(paragrafo);
