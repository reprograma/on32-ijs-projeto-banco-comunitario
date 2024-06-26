import { Client } from './cliente/client';
import { ContaCorrente } from './conta/contaCorrente';
import { ContaPoupanca } from './conta/contaPoupanca';

// Criando um novo cliente
const cliente1 = new Client('Victoria Lucena', 'Rua barao de angra, 12', 11939937600, 4000, 1);

// Criando uma conta corrente para o cliente
const contaCorrente = new ContaCorrente('CC001', cliente1);

// Operações na conta corrente
console.log(contaCorrente.depositar(1000));
console.log(contaCorrente.saldo);

console.log(contaCorrente.sacar(500));
console.log(contaCorrente.saldo);

// Criando uma conta poupança para o cliente
const contaPoupanca = new ContaPoupanca('CP001', cliente1);

// Operações na conta poupança
console.log(contaPoupanca.depositar(500));
console.log(contaPoupanca.saldo);

console.log(contaCorrente.transferir(200, contaPoupanca));
console.log('Saldo da conta corrente:', contaCorrente.saldo);
console.log('Saldo da conta poupança:', contaPoupanca.saldo);