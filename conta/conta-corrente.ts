import { ClienteInterface } from "../cliente/interfaces/cliente.interface";
import { TransacaoTipoEnum } from "../transacao/enum/transacao-tipo.enum";
import { TransacaoInterface } from "../transacao/interfaces/transacao.interface";
import { ContaInterface } from "./interfaces/conta.interface";

export class ContaCorrente implements ContaInterface {
    limiteChequeEspecial: number;
    cliente: ClienteInterface;
    saldo: number;
    transacoes: TransacaoInterface[] = [];

    constructor(cliente: ClienteInterface, saldoInicial: number = 0) {
        this.cliente = cliente
        if(saldoInicial>= 500 ) {
            this.saldo = saldoInicial
            this.transacoes.push({ data: new Date(), tipoTransacao:TransacaoTipoEnum.DEPOSITO, valor: saldoInicial, descricao: "Depósito inicial"  })
            this.limiteChequeEspecial = 100;
        } else {
            throw new Error("Conta Corrente não pode ser criada com saldo abaixo de R$500");
            
        }
    }

    depositar(valor: number): void {
        this.saldo += valor;
        const descricao = `Depositado ${valor} na Conta Corrente de ${this.cliente.nomeCompleto}`
        this.transacoes.push({ data: new Date(), tipoTransacao: TransacaoTipoEnum.DEPOSITO, valor, descricao })
    }

    sacar(valor: number): void {
        const saldoDisponivel = this.saldo + this.limiteChequeEspecial;
        if (valor <= saldoDisponivel) {
            this.saldo -= valor;
            const descricao = `Sacado ${valor} da Conta Corrente de ${this.cliente.nomeCompleto}`
            this.transacoes.push({ data: new Date(), tipoTransacao: TransacaoTipoEnum.SAQUE, valor, descricao })
        } else {
            console.log(`Saldo insuficiente na Conta Corrente de ${this.cliente.nomeCompleto}`);
        }
    }

    transferir(contaDestino: ContaInterface, valor: number): void {
        const saldoDisponivel = this.saldo + this.limiteChequeEspecial;
        if (valor <= saldoDisponivel) {
            this.saldo -= valor;
            contaDestino.depositar(valor);
            const descricao = `Transferência de ${valor} realizada da Conta Corrente para a Conta Poupança de ${contaDestino.cliente.nomeCompleto}`
            this.transacoes.push({ data: new Date(), tipoTransacao: TransacaoTipoEnum.TRANSFERENCIA, valor, descricao })
        } else {
            console.log(`Saldo insuficiente na Conta Corrente de ${this.cliente.nomeCompleto} para transferência`);
        }
    }
}