
class Filme {

    constructor() {
        this.titulo = null;
        this.ano = null;
        this.genero = null;
        this.diretor = '';
        this.atores = [];
        this.duracao = 0;
    }

    Reproduzir() {
        console.log('Reproduzindo');
    }

    Pausar() {
        console.log('Pausado');
    }

    Avancar() {
        console.log('Avançando');
    }
    Fechar() {
        console.log('Fechando');
    }
}