export interface ContaInterface {
    numero: number;
    saldo: number;
    depositar(valor: number): void;
    sacar(valor: number): void;
    transferir(valor: number, contaDestino: ContaInterface): void;
}
