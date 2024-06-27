import { ClienteInterface } from "../interfaces/cliente/cliente.interface";

export class Cliente implements ClienteInterface{
    nome: string
    id: string
    endereco: string
    telefone: string
    renda: number

    constructor(nome: string, id: string, endereco: string, telefone: string, renda: number){
        this.nome = nome;
        this.id = id;
        this.endereco = endereco;
        this.telefone = telefone;
        this.renda = renda;
    }

}
