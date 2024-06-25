export interface NovaConta {
    depositar(valor: number): void;
    sacar(valor: number): void;
    transferir(valor: number, contaDestino: NovaConta): void;
    consultarSaldo(): number;
}

// void apenas mostra o que precisamos

