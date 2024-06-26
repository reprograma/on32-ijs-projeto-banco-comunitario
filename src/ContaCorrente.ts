import Cliente from './Cliente';
import { ContaBancaria, TipoConta } from './ContaBancaria';

class ContaCorrente extends ContaBancaria {
    private chequeEspecial: number;

    constructor(numeroConta: string, cliente: Cliente) {
        super(numeroConta, cliente, TipoConta.Corrente);
        this.chequeEspecial = 100;
    }

    sacar(valor: number): void {
        if (valor <= 0) {
            throw new Error("O valor do saque deve ser positivo");
        }
        if (valor > this.saldo + this.chequeEspecial) {
            throw new Error("Saldo insuficiente, incluindo cheque especial");
        }
        this.saldo -= valor;
    }

    getChequeEspecial(): number {
        return this.chequeEspecial;
    }
}

export default ContaCorrente;
