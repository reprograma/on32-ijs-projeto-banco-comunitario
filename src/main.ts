import { ContaCorrente } from "./classes/ContaCorrente";
import { ContaPoupanca } from "./classes/ContaPoupanca";
import { Cliente } from "./classes/cliente";


const cliente1 = new Cliente('João Silva', 10, 'Rua A, 123', '123456789', 600);
const cliente2 = new Cliente('Maria Silva', 20, 'Rua B, 123', '012345678', 400);

const contaCorrente = new ContaCorrente(1001, cliente1)
const contaPoupanca = new ContaPoupanca(2001, cliente2);

// Interagindo com as contas. Criando operações pra testar
contaCorrente.depositar(1000);
contaCorrente.sacar(200);
contaCorrente.transferir(100, contaPoupanca);

// Mostrando em tela
console.log(`Saldo da Conta Corrente: R$${contaCorrente.consultarSaldo()}`);
console.log(`Saldo da Conta Poupanca: R$${contaPoupanca.consultarSaldo()}`);