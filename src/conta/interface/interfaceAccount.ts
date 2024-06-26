import { interfaceClient } from "../../cliente/interface/interfaceClient";
import { ContaTipoEnum } from "../enums/tipoConta";

export interface Conta {
 type: ContaTipoEnum;
 numeroConta: string;
 saldo: number;
 client: interfaceClient;
 depositar(valor: number): string;
 sacar(valor: number): string;
 transferir(valor: number, paraConta: Conta): string;
}