export interface NovaConta {
    consultarSaldo(): number;
    numeroConta(valor: number): void;
    depositar(valor: number): void;
    sacar(valor: number): void;
    transferir(valor: number, contaDestino: NovaConta): void; // Método para transferir um valor para outra conta.
    saldoConta(): number;
}

// void apenas mostra o que precisamos

