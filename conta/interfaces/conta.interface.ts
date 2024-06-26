import { ContaTipoEnum } from "../../enums/conta-tipo.enum";

export interface ContaBancaria {
    tipo: ContaTipoEnum
    saldo: number
    criarConta: () => boolean;
    depositar(valor:number):void
    sacar(valor:number):void
    transferir(valor:number, contaDestino: ContaBancaria):void
}