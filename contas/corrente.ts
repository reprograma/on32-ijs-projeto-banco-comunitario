import { DetalhesCliente } from "../interfaces/cliente";
import { ContaBancaria } from "../interfaces/conta";

export class ContaCorrente implements ContaBancaria {
    cliente: DetalhesCliente;
    numeroConta: number;
    saldo: number;
    tipoConta: "CORRENTE";
    chequeEspecial = 100.00;
    

    constructor(cliente: DetalhesCliente, saldo: number) {
        if (this.saldo < 500) {
            throw new Error("Necessário ter saldo a partir de R$ 500,00 para abrir uma Conta Corrente");
        }

        this.cliente = cliente;
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
                console.log("Saldo insuficiente para realizar transferência")}
            }
        }

