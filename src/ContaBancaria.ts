import Cliente from "./Cliente";

enum TipoConta {
    Corrente = "Corrente",
    Poupanca = "Poupança",
}

abstract class ContaBancaria {
    protected saldo: number;

    constructor(
        public numeroConta: string,
        public cliente: Cliente,
        public tipoConta: TipoConta
    ) {
        this.saldo = 0;
    }

    depositar(valor: number): void {
        if (valor <= 0) {
            throw new Error("O valor do depósito deve ser positivo");
        }
        this.saldo += valor;
    }

    sacar(valor: number): void {
        if (valor <= 0) {
            throw new Error("O valor do saque deve ser positivo");
        }
        if (valor > this.saldo) {
            throw new Error("Saldo insuficiente");
        }
        this.saldo -= valor;
    }

    transferir(valor: number, contaDestino: ContaBancaria): void {
        this.sacar(valor);
        contaDestino.depositar(valor);
    }

    getSaldo(): number {
        return this.saldo;
    }
}

export { ContaBancaria, TipoConta };
