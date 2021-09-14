class AnotacoesController {
    constructor () {
        this.anotacoes = [];
    }
    addAnotacao() {
        let titulo = $("#titulo").val();
        let notas = $("#descricaoTarefa").val();
        let novaAnotacao = new Anotacoes(titulo, notas);
        this.anotacoes.push(novaAnotacao);
        console.log(this.anotacoes);
    }
}
