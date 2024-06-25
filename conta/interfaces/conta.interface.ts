import { ClienteInterface } from "../../cliente/interfaces/cliente.interface";
import { TransacaoInterface } from "../../transacao/interfaces/transacao.interface";

export interface ContaInterface {
    cliente: ClienteInterface;
    saldo: number;
    transacoes: TransacaoInterface[] | []
    
    depositar(valor: number): void;
    sacar(valor: number): void;
    transferir(contaDestino: ContaInterface, valor: number): void;
}