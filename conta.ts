import { IConta } from "./interfaces/conta-bancaria.interface";

export class ContaCorrente implements IConta {
    tipoDeConta: 'CONTA CORRENTE';
    saldo: number;

    constructor() {
        this.tipoDeConta = 'CONTA CORRENTE';
        this.saldo = 0;
    }

    depositar(valor: number): string {
        this.saldo += valor;
        return `Depósito de R$${valor} realizado com sucesso. Novo saldo: R$${this.saldo}.`;
    }

    transferir(valor: number, contaDestino: IConta): string {
        if (this.saldo >= valor) {
            this.saldo -= valor;
            contaDestino.saldo += valor;
            return `Transferência de R$${valor} realizada com sucesso. Saldo atual: R$${this.saldo}.`;
        } else {
            return `Saldo insuficiente para transferência de R$${valor}.`;
        }
    }
}

export class ContaPoupanca implements IConta {
    tipoDeConta: 'CONTA POUPANÇA';
    saldo: number;

    constructor() {
        this.tipoDeConta = 'CONTA POUPANÇA';
        this.saldo = 0;
    }

    depositar(valor: number): string {
        this.saldo += valor;
        return `Depósito de R$${valor} realizado com sucesso. Novo saldo: R$${this.saldo}.`;
    }
}
