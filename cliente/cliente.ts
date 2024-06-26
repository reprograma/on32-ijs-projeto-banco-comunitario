import { ClienteInterface } from "./interfaces/cliente.interface";
import { ContaTipoEnum } from "../enums/conta-tipo.enum";

export class Cliente implements ClienteInterface {
    public nomeCompleto: string;
    public id: number;
    public endereco: string;
    public telefone: string;
    public rendaSalarial: number;
    public tipoConta: ContaTipoEnum

    constructor(
        nomeCompleto: string,
        id: number,
        endereco: string,
        telefone: string,
        renda: number
    ) {
        this.nomeCompleto = nomeCompleto
        this.id = id
        this.endereco = endereco
        this.telefone = telefone
        this.rendaSalarial = renda

        if (renda >= 500) {
            this.tipoConta = ContaTipoEnum.CORRENTE;
        } else {
            this.tipoConta = ContaTipoEnum.POUPANCA;
        }
    }

    detalhes(): string {
        const detalhesCliente = `
            Detalhes do cliente ${this.id}:
            ID: ${this.id},
            Nome: ${this.nomeCompleto},
            Endereço: ${this.endereco},
            Telefone: ${this.telefone},
            Renda salarial: ${this.rendaSalarial},
            Tipo de conta: ${this.tipoConta}
        `;

        console.log(detalhesCliente);
        return detalhesCliente;
    }
}