import { Conta } from './conta';

export class ContaCorrente extends Conta {
    private limiteChequeEspecial: number;

    constructor(numero: number, saldo: number, limiteChequeEspecial: number = 100) {
        super(numero, saldo);
        this.limiteChequeEspecial = limiteChequeEspecial;
    }

    sacar(valor: number): void {
        if (valor <= this.saldo + this.limiteChequeEspecial) {
            this.saldo -= valor;
        } else {
            console.log('Saldo insuficiente, mesmo considerando o cheque especial');
        }
    }
}
