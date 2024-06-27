import { Clientes } from "../interfaces/Cliente";

export abstract class Conta {
    protected saldo: number;

    constructor(
        public numeroConta: string,
        public cliente: Clientes
    ) {
        this.saldo = 0;
    }

    public getSaldo(): number {
        return this.saldo;
    }

    public depositar(valor: number): void {
        if (valor > 0) {
            this.saldo += valor;
        }
    }

    public sacar(valor: number): boolean {
        if (valor > 0 && this.saldo >= valor) {
            this.saldo -= valor;
            return true;
        }
        return false;
    }

    public transferir(destino: Conta, valor: number): boolean {
        if (this.sacar(valor)) {
            destino.depositar(valor);
            return true;
        }
        return false;
    }
}
