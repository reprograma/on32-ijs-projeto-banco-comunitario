export interface NovaConta {
    numeroConta(valor: number): void;
    depositar(valor: number): void;
    sacar(valor: number): void;
    transferir(valor: number, contaDestino: NovaConta): void;
    saldoConta(): number;
}

// void apenas mostra o que precisamos

