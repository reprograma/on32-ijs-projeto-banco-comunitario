import { Cliente } from '../models/cliente';
import { ContaCorrente } from '../models/conta-corrente';
import { ContaPoupanca } from '../models/conta-poupanca';

export class Banco {
    private clientes: Cliente[] = [];
    private contas: (ContaCorrente | ContaPoupanca)[] = [];

    adicionarCliente(cliente: Cliente): void {
        this.clientes.push(cliente);
    }

    criarContaCorrente(cliente: Cliente): ContaCorrente | null {
        if (cliente.rendaSalarial >= 500) {
            const conta = new ContaCorrente(this.contas.length + 1, 0);
            this.contas.push(conta);
            return conta;
        } else {
            console.log('Renda salarial insuficiente para abrir conta corrente');
            return null;
        }
    }

    criarContaPoupanca(cliente: Cliente): ContaPoupanca {
        const conta = new ContaPoupanca(this.contas.length + 1, 0);
        this.contas.push(conta);
        return conta;
    }

    buscarConta(numero: number): ContaCorrente | ContaPoupanca | undefined {
        return this.contas.find(conta => conta.numero === numero);
    }
}
