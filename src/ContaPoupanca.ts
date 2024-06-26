import Cliente from './Cliente';
import { ContaBancaria, TipoConta } from './ContaBancaria';

class ContaPoupanca extends ContaBancaria {
    constructor(numeroConta: string, cliente: Cliente) {
        super(numeroConta, cliente, TipoConta.Poupanca);
    }
}

export default ContaPoupanca;
