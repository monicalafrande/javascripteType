function contar() {
  let numero = document.querySelector(".numero");
  let resultado = document.querySelector(".resultado");
  

  resultado.innerHTML += `<p style='font-family: cursive;'>Contando de 0 até ${numero.value}</p>`;
  for (let i = 0; i <= Number(numero.value); i++) {
    resultado.innerHTML += `* ${i} `;
  }
}
