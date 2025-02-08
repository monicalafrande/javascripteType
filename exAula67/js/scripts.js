const entradaTarefa = document.querySelector(".entradaTarefa");
const addTarefa = document.querySelector(".addTarefa");
const listaDeTarefas = document.querySelector(".listaDeTarefas");


function criarLi() {
    const li = document.createElement("li");
    return li;
}

addTarefa.addEventListener("keypress", function(e) {
    if (e.keyCode === 13) {
        if (!addTarefa.value) return;
        criaTarefa(addTarefa.value);
    }
});

function criaTarefa(textoInput) {
    const li = criarLi();
    li.innerText = textoInput;
    listaDeTarefas.appendChild(li);
}

addTarefa.addEventListener("click", function() {
    if (!entradaTarefa.value) return;
    criaTarefa(entradaTarefa.value);

});
