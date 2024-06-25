import { Conta } from './conta';
import { Cliente } from './cliente';

export class ContaPoupanca extends Conta {
    constructor(numero: number, cliente: Cliente) {
        super(numero, cliente);
    }
}
