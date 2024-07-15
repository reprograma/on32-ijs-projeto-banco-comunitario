import { ClienteInterface } from '../interfaces/cliente-interface';

export class Cliente implements ClienteInterface {
    constructor(
        public nomeCompleto: string,
        public id: number,
        public endereco: string,
        public telefone: string,
        public rendaSalarial: number
    ) {}
}
