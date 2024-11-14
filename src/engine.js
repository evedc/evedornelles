

window.addEventListener("scroll", function () {
    var imagem = document.getElementById("imagem");
    var posicaoImagem = imagem.getBoundingClientRect().top;
    var alturaTela = window.innerHeight;

    // Ativa a animação quando a imagem está na tela
    if (posicaoImagem < alturaTela) {
        imagem.classList.add("ativa");
    }
});
