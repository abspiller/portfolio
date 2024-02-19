function clique(img) {
    var modalJanela = document.getElementById("janelaModal");
    var modalImagem = document.getElementById("imgModal");
    var modalBotao = document.getElementById("btnModal");

    modalJanela.style.display = "block";
    modalImagem.src = img
    modalBotao.onclick = function() {
        modalJanela.style.display = "none";
    }

}