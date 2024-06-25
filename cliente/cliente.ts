
import { ClienteInterface } from "./interfaces/cliente.interface";
import { EnderecoInterface } from "./interfaces/endereco.interface";

export class Cliente implements ClienteInterface {
    id: number;
    nomeCompleto: string;
    numeroIdentificacao: string;
    numeroTelefone: string;
    rendaSalario: number;
    endereco: EnderecoInterface;
    constructor(id: number, nomeCompleto: string, numeroIdentificacao: string, numeroTelefone: string, rendaSalario: number, endereco: EnderecoInterface) {
        this.id = id
        this.nomeCompleto = nomeCompleto
        this.numeroIdentificacao = numeroIdentificacao
        this.numeroTelefone = numeroTelefone
        this.rendaSalario = rendaSalario
        this.endereco = endereco
    }

}