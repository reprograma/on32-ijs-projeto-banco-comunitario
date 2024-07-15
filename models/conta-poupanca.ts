import { Conta } from './conta';

export class ContaPoupanca extends Conta {
    constructor(numero: number, saldo: number) {
        super(numero, saldo);
    }
}
