import { ContaInterface } from '../interfaces/conta-interface';

export abstract class Conta implements ContaInterface {
    constructor(
        public numero: number,
        public saldo: number
    ) {}

    depositar(valor: number): void {
        this.saldo += valor;
    }

    sacar(valor: number): void {
        if (valor <= this.saldo) {
            this.saldo -= valor;
        } else {
            console.log('Saldo insuficiente');
        }
    }

    transferir(valor: number, contaDestino: ContaInterface): void {
        if (valor <= this.saldo) {
            this.sacar(valor);
            contaDestino.depositar(valor);
        } else {
            console.log('Saldo insuficiente');
        }
    }
}
