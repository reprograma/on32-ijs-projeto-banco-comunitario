import { DetalhesCliente } from "../interfaces/cliente";
import { ContaBancaria } from "../interfaces/conta";

export class ContaPoupanca implements ContaBancaria {
    cliente: DetalhesCliente;
    numeroConta: number;
    saldo: number;
    tipoConta: "POUPANCA";

    constructor(cliente: DetalhesCliente, saldo: number) {
        this.cliente = cliente;
        this.numeroConta = this.numeroConta;
        this.saldo = saldo;
        }

        sacar(valor: number): void {
            if (valor <= 0) {
                console.log("Valor para saque deve ser maior que 0")
            }

            if (valor < this.saldo) {
                console.log("Saldo insuficiente para realizar o saque")
            }

            this.saldo -= valor;
            console.log(`Saldo atualizado pós-saque: R$ ${this.saldo}`)
        }

        depositar(valor: number): void {
            this.saldo += valor;
            console.log(`Saldo atualizado pós depósito: R$ ${this.saldo}`)
        }

        transferir(valor: number, destinatario: ContaBancaria): void {
            if (valor > this.saldo) {
                console.log("Saldo insuficiente para realizar transferência")
            } else {
                this.saldo -= valor;
                console.log(`Transferência efetuada com sucesso. Saldo atual R$: ${this.saldo}`);
                destinatario.depositar(valor);
                console.log(`Transferência de R${valor} realizada para a conta ${destinatario.numeroConta}. \n`);

            }
        }

}