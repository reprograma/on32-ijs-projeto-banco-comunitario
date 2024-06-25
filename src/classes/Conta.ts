import { NovaConta } from "../interfaces/NovaConta";
import { Cliente } from "./cliente"; // Corrigi o nome do arquivo para Cliente com C maiúsculo

// Classe abstrata que representa uma conta bancária genérica
export abstract class Conta implements NovaConta {
    // Atributo saldo protegido, só pode ser acessado dentro da própria classe e suas subclasses
    protected saldo: number = 0;

    // Inicializa uma conta com um número e um cliente
    constructor(public numero: number, public cliente: Cliente) {}

    // Implementação do método numeroConta da interface NovaConta
    numeroConta(valor: number): void {
        this.numero = valor;
    }

    // Implementação do método saldoConta da interface NovaConta
    saldoConta(): number {
        return this.saldo;
    }

    // MÉTODOS

    // Adiciona um valor ao saldo
    depositar(valor: number): void {
        this.saldo += valor;
        console.log(`Depositado: R$${valor}. Saldo atual: R$${this.saldo}`);
    }

    // Subtrai um valor do saldo se houver fundos suficientes
    sacar(valor: number): void {
        if (this.saldo >= valor) {
            this.saldo -= valor;
            console.log(`Sacado: R$${valor}. Saldo atual: R$${this.saldo}`);
        } else {
            console.log('Saldo insuficiente.');
        }
    }

    // Transfere um valor para outra conta
    transferir(valor: number, contaDestino: NovaConta): void {
        if (this.saldo >= valor) {
            this.saldo -= valor;
            contaDestino.depositar(valor);
            console.log(`Transferido: R$${valor} para conta ${contaDestino.consultarSaldo()}. Saldo atual: R$${this.saldo}`);
        } else {
            console.log('Saldo insuficiente.');
        }
    }

    // Retorna o saldo atual da conta
    consultarSaldo(): number {
        return this.saldo;
    }
}
