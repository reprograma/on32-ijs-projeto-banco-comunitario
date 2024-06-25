export class Cliente {
    constructor( // criando um novo constructor com as informações pedidas em modo público
        public nome: string,
        public id: number,
        public endereco: string,
        public telefone: string,
        public rendaSalarial: number
    ) {}
}
