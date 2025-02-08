// function comecar() {
//   let resultado = document.querySelector(".resultado");
//   let novoTexto = document.createElement("p");

//   novoTexto.textContent = "Contando de 1 até 10";
//   resultado.appendChild(novoTexto);
//   novoTexto.classList.add("estilo-p");

//   for (let i = 0; i < 10; i++) {
//     let contagem = document.createElement("p");
//     contagem.textContent = (i + 1) + " ";

//     resultado.appendChild(contagem);
//   }
// }

function comecar() {
  let resultado = document.querySelector(".resultado");
  resultado.innerHTML += `<p style='font-family: cursive;'>Contando de 1 até 10</p>`;

  let cont = 1;
  while (cont <= 10) {
    resultado.innerHTML += cont + " ";
    cont++;
  }
}
