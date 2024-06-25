export interface NovaConta {
    consultarSaldo(): number;
    numeroConta(valor: number): void;
    depositar(valor: number): void;
    sacar(valor: number): void;
    transferir(valor: number, contaDestino: NovaConta): void;
    saldoConta(): number;
}
