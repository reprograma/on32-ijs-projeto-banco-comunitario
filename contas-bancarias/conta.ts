import { ContaBancaria } from "../interfaces/conta-bancaria/contaBancaria.interface";

export class Conta implements ContaBancaria{
    saldo: number
    numeroConta: number

    constructor(saldoInicial: number, numeroConta: number){
        this.saldo = saldoInicial;
        this.numeroConta = numeroConta;
    }

    depositar(valor: number) {
        this.saldo += valor; 
    }

    sacar(valor: number): boolean {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            return true;
        }
        return false;
    }

}
 export class ContaCorrente extends Conta {
    limiteChequeEspecial: number;

    constructor(numeroConta: number, saldoInicial: number, limiteChequeEspecial: number = 100) {
        super(numeroConta, saldoInicial);
        this.limiteChequeEspecial = limiteChequeEspecial;
    }

    sacar(valor: number): boolean {
        if (valor <= this.saldo + this.limiteChequeEspecial) {
            this.saldo -= valor;
            return true;
        }
        return false;
    }
}

export class ContaPoupanca extends Conta{

    constructor(saldoInicial: number, numeroConta: number){
        super(saldoInicial, numeroConta)
    }
}

