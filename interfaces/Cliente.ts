interface Cliente {
    nome: string;
    id: string;
    endereco: string;
    telefone: string;
    rendaSalarial: number;
}

export class Clientes implements Cliente {
    constructor(
        public nome: string,
        public id: string,
        public endereco: string,
        public telefone: string,
        public rendaSalarial: number
    ) {}
}