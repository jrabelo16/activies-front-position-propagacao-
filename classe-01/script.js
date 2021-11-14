const img = document.querySelector("img");
const inputSenha = document.querySelector("input#txt-senha");




img.addEventListener('click', mostrarSenha);

function mostrarSenha(event) {
    img.src = "assets/olho-aberto.svg";
    img.alt = "Esconder";

    inputSenha.type = "text";

    img.removeEventListener('click', mostrarSenha);
    img.addEventListener('click', ocultarSenha);
}


function ocultarSenha(event) {
    img.src = "assets/olho-fechado.svg";
    img.alt = "Ver";

    inputSenha.type = "password";

    img.removeEventListener('click', ocultarSenha);
    img.addEventListener('click', mostrarSenha);
}