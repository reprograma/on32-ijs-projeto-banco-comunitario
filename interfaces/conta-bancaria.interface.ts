
export interface IConta {
    tipoDeConta: 'CONTA CORRENTE' | 'CONTA POUPANÇA';
    saldo: number;
    depositar(valor: number): string;
}
