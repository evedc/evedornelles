window.addEventListener("scroll", function () {
    var imagens = document.querySelectorAll(".imagem"); // Seleciona todas as imagens com a classe .imagem

    imagens.forEach(function (imagem) {
        var posicaoImagem = imagem.getBoundingClientRect().top;
        var alturaTela = window.innerHeight;

        // Ativa a animação quando a imagem está na tela
        if (posicaoImagem < alturaTela && posicaoImagem > 0) {
            imagem.classList.add("ativa");
        } else {
            imagem.classList.remove("ativa"); // Remove a animação ao sair da tela para repetição
        }
    });
});

window.addEventListener("scroll", function () {
    var skillsGrid = document.querySelector(".skills"); // Seleciona o grid de skills

    var posicaoGrid = skillsGrid.getBoundingClientRect().top;
    var alturaTela = window.innerHeight;

    // Ativa a animação quando o grid está na tela
    if (posicaoGrid < alturaTela && posicaoGrid > 0) {
        skillsGrid.classList.add("ativa");
    } else {
        skillsGrid.classList.remove("ativa"); // Remove a animação ao sair da tela para repetição
    }
});