import { ContaTipoEnum } from "../Enums/contaTipo.enum";

export interface ContaInterface{
    tipo: ContaTipoEnum;
    numeroConta: number;
    saldo: number;
    depositar(valor: number): void;
    sacar(valor: number): void;
    transferir(valor: number, ContaDestino: ContaInterface): void;
}