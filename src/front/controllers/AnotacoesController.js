class AnotacoesController {
    constructor () {
        this.anotacoes = [];
    }
    addAnotacoes () {
        let titulo = document.getElementById("#titulo").value
        let notas = document.getElementById("#descricaoTarefa").value
        let novaAnotacao = new Anotacoes (titulo, notas)
        this.anotacoes.push(novaAnotacao);
    }
}
