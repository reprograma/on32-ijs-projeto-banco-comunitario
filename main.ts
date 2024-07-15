import { Cliente } from './models/cliente';
import { Banco } from './services/banco';

const banco = new Banco();

const cliente1 = new Cliente('João Silva', 1, 'Rua A, 123', '9999-8888', 1000);
const cliente2 = new Cliente('Maria Oliveira', 2, 'Rua B, 456', '8888-7777', 300);

banco.adicionarCliente(cliente1);
banco.adicionarCliente(cliente2);

const contaCorrente1 = banco.criarContaCorrente(cliente1);
if (contaCorrente1) {
    contaCorrente1.depositar(500);
    contaCorrente1.sacar(200);
    console.log(`Conta Corrente de ${cliente1.nomeCompleto} - Saldo: ${contaCorrente1.saldo}`);
}

const contaPoupanca1 = banco.criarContaPoupanca(cliente2);
contaPoupanca1.depositar(200);
contaPoupanca1.sacar(50);
console.log(`Conta Poupança de ${cliente2.nomeCompleto} - Saldo: ${contaPoupanca1.saldo}`);

if (contaCorrente1) {
    contaCorrente1.transferir(100, contaPoupanca1);
    console.log(`Transferência realizada. Novo saldo da Conta Corrente: ${contaCorrente1.saldo}`);
    console.log(`Novo saldo da Conta Poupança: ${contaPoupanca1.saldo}`);
}
