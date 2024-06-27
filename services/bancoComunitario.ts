import { Clientes } from './../interfaces/Cliente';
import { Conta } from "../classes/conta";
import { ContaCorrente } from "../classes/contaCorrente";
import { ContaPoupanca } from "../classes/contaPoupanca"


export class Banco {
    private clientes: Clientes[] = [];
    private contas: Conta[] = [];

    public criarCliente(
        nome: string,
        id: string,
        endereco: string,
        telefone: string,
        rendaSalarial: number
    ): Clientes {
        const cliente = new Clientes(nome, id, endereco, telefone, rendaSalarial);
        this.clientes.push(cliente);
        return cliente;
    }

    public criarContaCorrente(numeroConta: string, cliente: Clientes): ContaCorrente | null {
        if (cliente.rendaSalarial >= 500) {
            const contaCorrente = new ContaCorrente(numeroConta, cliente);
            this.contas.push(contaCorrente);
            return contaCorrente;
        }
        return null;
    }

    public criarContaPoupanca(numeroConta: string, cliente: Clientes): ContaPoupanca {
        const contaPoupanca = new ContaPoupanca(numeroConta, cliente);
        this.contas.push(contaPoupanca);
        return contaPoupanca;
    }

    public buscarConta(numeroConta: string): Conta | undefined {
        return this.contas.find(conta => conta.numeroConta === numeroConta);
    }
}


const banco = new Banco();
const cliente1 = banco.criarCliente('Fernanda Raiza', '1', 'Rua Aliados', '1111-2222', 1000);
const contaCorrente1 = banco.criarContaCorrente('001', cliente1);
const cliente2 = banco.criarCliente('Maria José', '2', 'Rua da Banana', '4002-8422', 1500);
const contaPoupanca1 = banco.criarContaPoupanca('002', cliente2);

if (contaCorrente1) {
    contaCorrente1.depositar(500);
    contaCorrente1.sacar(500);
}

if (contaPoupanca1) {
    contaPoupanca1.depositar(1000);
    contaPoupanca1.sacar(500);
    contaPoupanca1.getSaldo()
}

console.log(banco.buscarConta('001')); // Conta Corrente de Fernanda
console.log(banco.buscarConta('002')); // Conta Poupança de Maria
console.log(contaCorrente1.getSaldo());
console.log(contaPoupanca1.getSaldo());