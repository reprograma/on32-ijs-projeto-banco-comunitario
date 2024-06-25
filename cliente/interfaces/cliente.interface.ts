import { EnderecoInterface } from "./endereco.interface"

export interface ClienteInterface {
    id: number
    nomeCompleto: string
    numeroIdentificacao: string
    numeroTelefone: string
    rendaSalario: number
    endereco: EnderecoInterface
}