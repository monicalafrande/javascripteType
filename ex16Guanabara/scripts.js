function comecar() {
    let ano = Number(prompt("Em que ano você nasceu?"));
    let idade = 2025 - ano;
    let resultado = document.querySelector(".resultado");

    resultado.innerHTML = `Quem nasceu em ${ano} vai completar ${idade} anos em 2025.`
}