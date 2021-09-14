const botao = document.querySelector("button");
botao.addEventListener('click', function(evento) {
        evento.preventDefault();
        let novaAnotacao = new AnotacoesController();
        novaAnotacao.addAnotacao()
        console.log(novaAnotacao);
})
