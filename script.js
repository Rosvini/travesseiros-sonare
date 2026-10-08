function comprar(produto) {
    const modal = document.getElementById("modal");
    const produtoEscolhido = document.getElementById("produtoEscolhido");

    produtoEscolhido.innerHTML =
        "Você selecionou: <strong>" + produto + "</strong>";

    modal.style.display = "flex";
}

function fecharModal() {
    const modal = document.getElementById("modal");

    modal.style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById("modal");

    if (event.target === modal) {
        modal.style.display = "none";
    }
};