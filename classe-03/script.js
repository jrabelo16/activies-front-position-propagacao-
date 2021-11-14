const imgemModal = document.querySelector(".modal img");
const colecao = document.querySelectorAll(".imgs img");
const modal = document.querySelector(".modal");
const linkModal = document.querySelector(".modal a");

function abrirModal(src) {
    imgemModal.src = src;
    modal.classList.toggle("escondida");
    linkModal.href = src;
}

colecao.forEach(imagemDaColecao => {
    imagemDaColecao.addEventListener("click", function (event) {
        abrirModal(event.target.src);
    });
});

modal.addEventListener("click", function (event) {
    modal.classList.toggle("escondida");
});

linkModal.addEventListener("click", function (event) {
    event.stopPropagation();
})