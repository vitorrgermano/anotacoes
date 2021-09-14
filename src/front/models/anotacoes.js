class Anotacoes {
    constructor(titulo, notas) {
        try {
            if (typeof (titulo) != 'string') throw "Criação de notas - dados inválidos";
            if (typeof (notas) != 'string') throw "Criação de notas - dados inválidos";
            this.titulo = titulo;
            this.notas = notas;
        } catch (error) {
            return alert(error);
        }
    }
}