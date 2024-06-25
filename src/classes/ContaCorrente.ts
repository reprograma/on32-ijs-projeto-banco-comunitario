
// A partir de R$ 500,00 o cliente pode ter uma conta corrente. 
// Para a conta corrente, é necessário armazenar o limite do cheque especial(R$ 100,00).

import { Cliente } from "./cliente";
import { Conta } from "./conta";
import { NovaConta } from "../interfaces/NovaConta";

export class ContaCorrente extends Conta { // herança
    private limiteChequeEspecial: number = 100;

    constructor(numero: number, cliente: Cliente) {
        super(numero, cliente);
    }

    // Sobrescreve o método sacar para considerar o limite do cheque especial
    sacar(valor: number): void {
        // Verifica se o saldo atual (this.saldo) mais o limite do
        // cheque especial (this.limiteChequeEspecial) é maior ou igual ao valor a ser sacado (valor).
        if (this.saldo + this.limiteChequeEspecial >= valor) {
            // Se for, a condição é verdadeira e o bloco de código dentro das chaves {} será
            // executado. Caso contrário, o bloco de código dentro do else será executado.

            this.saldo -= valor; // se for verdadeira o valor é subtraído
            console.log(`Sacado: R$${valor}. Saldo atual: R$${this.saldo}`);
        } else {
            console.log('Saldo insuficiente.');
        }
    }

    // Métodos herdados da classe Conta e da interface NovaConta
    depositar(valor: number): void {
        super.depositar(valor); // consigo implementar as infos da Conta, classe mãe. Função depositar
    }

    transferir(valor: number, contaDestino: NovaConta): void {
        super.transferir(valor, contaDestino);
    }

    consultarSaldo(): number {
        return super.consultarSaldo();
    }

    numeroConta(valor: number): void {
        super.numeroConta(valor);
    }

    saldoConta(): number { // método retorna o saldo atual da conta corrente
        return super.saldoConta();
    }
}
