import { Clientes } from "../interfaces/Cliente";
import { Conta } from "./conta";

export class ContaCorrente extends Conta {
    private limiteChequeEspecial: number = 100;

    constructor(numeroConta: string, cliente: Clientes) {
        super(numeroConta, cliente);
    }

    public sacar(valor: number): boolean {
        if (valor > 0 && this.saldo + this.limiteChequeEspecial >= valor) {
            this.saldo -= valor;
            return true;
        }
        return false;
    }
}
