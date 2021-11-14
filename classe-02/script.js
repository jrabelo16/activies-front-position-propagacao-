const interrogacao = document.querySelector("img");
const modal = document.querySelector("div.modal");

interrogacao.addEventListener("click", function (event) {
    modal.classList.toggle("escondida");
})