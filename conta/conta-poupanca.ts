import { ClienteInterface } from "../cliente/interfaces/cliente.interface";
import { TransacaoTipoEnum } from "../transacao/enum/transacao-tipo.enum";
import { TransacaoInterface } from "../transacao/interfaces/transacao.interface";
import { ContaInterface } from "./interfaces/conta.interface";

export class ContaPoupanca implements ContaInterface {
    cliente: ClienteInterface;
    saldo: number;
    transacoes: TransacaoInterface[] = [];

    constructor(cliente: ClienteInterface, saldoInicial: number = 0) {
        this.cliente = cliente
        this.saldo = saldoInicial
        this.transacoes.push({ data: new Date(), tipoTransacao: TransacaoTipoEnum.DEPOSITO, valor: saldoInicial, descricao: "Depósito inicial" })
    }

    depositar(valor: number): void {
        this.saldo += valor;
        const descricao = `Depositado ${valor} na Conta Poupança de ${this.cliente.nomeCompleto}`
        this.transacoes.push({ data: new Date(), tipoTransacao: TransacaoTipoEnum.DEPOSITO, valor, descricao })
    }

    sacar(valor: number): void {
        
        if (valor <= this.saldo) {
            this.saldo -= valor;
            const descricao = `Sacado ${valor} da Conta Poupança de ${this.cliente.nomeCompleto}`
            this.transacoes.push({ data: new Date(), tipoTransacao: TransacaoTipoEnum.SAQUE, valor, descricao })
        } else {
            console.log(`Saldo insuficiente na Conta Poupança de ${this.cliente.nomeCompleto}`);
        }
    }

    transferir(contaDestino: ContaInterface, valor: number): void {

        if (valor <= this.saldo) {
            this.saldo -= valor;
            contaDestino.depositar(valor);
            const descricao = `Transferência de ${valor} realizada da Conta Poupança para a Conta de ${contaDestino.cliente.nomeCompleto}`
            this.transacoes.push({ data: new Date(), tipoTransacao: TransacaoTipoEnum.TRANSFERENCIA, valor, descricao })
        } else {
            console.log(`Saldo insuficiente na Conta Poupança de ${this.cliente.nomeCompleto} para transferência`);
        }
    }
}