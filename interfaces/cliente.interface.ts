import { IConta } from "./conta-bancaria.interface"

export interface ICliente {
        nomeCompleto: string;
        id: string;
        endereco: string;
        telefone: string;
        rendaSalarial: number;
        contas: IConta[];
    }