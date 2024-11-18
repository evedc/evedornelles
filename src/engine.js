window.addEventListener("scroll", function () {
    var imagens = document.querySelectorAll(".imagem"); 

    imagens.forEach(function (imagem) {
        var posicaoImagem = imagem.getBoundingClientRect().top;
        var alturaTela = window.innerHeight;

       
        if (posicaoImagem < alturaTela && posicaoImagem > 0) {
            imagem.classList.add("ativa");
        } else {
            imagem.classList.remove("ativa"); 
        }
    });
});

window.addEventListener("scroll", function () {
    var skillsGrid = document.querySelector(".skills"); 

    var posicaoGrid = skillsGrid.getBoundingClientRect().top;
    var alturaTela = window.innerHeight;
    
    if (posicaoGrid < alturaTela && posicaoGrid > 0) {
        skillsGrid.classList.add("ativa");
    } else {
        skillsGrid.classList.remove("ativa");
    }
});