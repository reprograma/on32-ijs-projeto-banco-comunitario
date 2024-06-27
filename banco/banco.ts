import { Cliente } from "../clientes/cliente";
import { Conta } from "../contas-bancarias/conta";
import { ContaCorrente } from "../contas-bancarias/conta";
import { ContaPoupanca } from "../contas-bancarias/conta";

class Banco {
    clientes: Cliente[] = [];
    contas: Conta[] = [];
    private proximoNumeroConta: number = 1; // Controla o próximo número de conta a ser criado

    criarCliente(nome: string, id: string, endereco: string, telefone: string, renda: number): Cliente {
        const cliente = new Cliente(nome, id, endereco, telefone, renda);
        this.clientes.push(cliente);
        return cliente;
    }

    criarContaCorrente(cliente: Cliente, saldoInicial: number): ContaCorrente | null {
        if (cliente.renda >= 500) {
            const conta = new ContaCorrente(this.proximoNumeroConta++, saldoInicial);
            this.contas.push(conta);
            return conta;
        }
        return null;
    }

    criarContaPoupanca(cliente: Cliente, saldoInicial: number): ContaPoupanca {
        const conta = new ContaPoupanca(this.proximoNumeroConta++, saldoInicial);
        this.contas.push(conta);
        return conta;
    }

    depositar(numeroConta: number, valor: number): boolean {
        const conta = this.contas.find(c => c.numeroConta === numeroConta);
        if (conta) {
            conta.depositar(valor);
            return true;
        }
        return false;
    }

    sacar(numeroConta: number, valor: number): boolean {
        const conta = this.contas.find(c => c.numeroConta === numeroConta);
        if (conta) {
            return conta.sacar(valor);
        }
        return false;
    }

   
}

const banco = new Banco();
const cliente = banco.criarCliente("Ana Silva", '1', "Rua Exemplo, 123", "123456789", 1000);
const contaCorrente = banco.criarContaCorrente(cliente, 500);


if (contaCorrente) {
    banco.depositar(contaCorrente.numeroConta, 200);
}

console.log(banco);

