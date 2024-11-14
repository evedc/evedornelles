
window.addEventListener("scroll", function () {
    var imagem = document.getElementById("imagem");
    var posicaoImagem = imagem.getBoundingClientRect().top;
    var alturaTela = window.innerHeight;


    if (posicaoImagem < alturaTela) {
        imagem.classList.add("ativa");
    }
});

