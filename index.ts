import { Cliente } from "./classes/cliente";
import { ContaCorrente } from "./classes/contaCorrente";
import { ContaPoupanca } from "./classes/contaPoupanca";

console.log("\n=================================== Dados de Clientes ===================================");

const cliente01 = new Cliente("Samy", 81996018693, 'Rua Deputado Hugo Mardini 12, Apto 401', 5000);
console.log(`
Dados do Cliente:
Nome: ${cliente01.nome}
ID: ${cliente01.id}
Número de Telefone: ${cliente01.numeroTelefone}
Endereço: ${cliente01.endereco}
Renda Mensal: ${cliente01.rendaMensal}
`);

const cliente02 = new Cliente("Denis", 81996018693, 'Rua Deputado Hugo Mardini 12, Apto 401 ', 3000);
console.log(`
Dados do Cliente:
Nome: ${cliente02.nome}
ID: ${cliente02.id}
Número de Telefone: ${cliente02.numeroTelefone}
Endereço: ${cliente02.endereco}
Renda Mensal: ${cliente02.rendaMensal}
`);

const cliente03 = new Cliente("Meyce", 81996018693, 'Rua Pedro de Souza Leão, 100', 499);
console.log(`
Dados do Cliente:
Nome: ${cliente03.nome}
ID: ${cliente03.id}
Número de Telefone: ${cliente03.numeroTelefone}
Endereço: ${cliente03.endereco}
Renda Mensal: ${cliente03.rendaMensal}
`);

const cliente04 = new Cliente("Isabela", 81996018693, 'Rua Pedro de Souza Leão, 100', 499);
console.log(`
Dados do Cliente:
Nome: ${cliente04.nome}
ID: ${cliente04.id}
Número de Telefone: ${cliente04.numeroTelefone}
Endereço: ${cliente04.endereco}
Renda Mensal: ${cliente04.rendaMensal}
`);

console.log("======================================================================\n");

const contaSamy = new ContaCorrente(cliente01, 0);
const contaDenis = new ContaCorrente(cliente02, 100);

try {
    const contaMeyce = new ContaCorrente(cliente03, 300);
} catch (error) {
    if (error instanceof Error) {
        console.error(error.message);
    } else {
        console.error("Erro desconhecido ao tentar abrir a conta.");
    }
}

console.log(`Número da conta da ${cliente01.nome}: ${contaSamy.numeroConta}`);
console.log(`Saldo total da conta da ${cliente01.nome}: ${contaSamy.saldo} \n`);


contaSamy.depositar(500);
console.log(`Saldo com cheque especial incluso: ${contaSamy.saldoTotal} \n`);
contaSamy.sacar(100);

console.log('\n =================================================== \n')

console.log(`Saldo total da conta da ${cliente02.nome}: ${contaDenis.saldo} \n`);
contaSamy.transferir(450, contaDenis);
console.log(`Saldo após transferência: ${contaSamy.saldoTotal} \n`);
console.log(`Saldo da conta destino após transferência: ${contaDenis.saldo} \n`);

console.log('\n =================================================== \n')
const contaIsabela = new ContaPoupanca(cliente04, 100);

console.log(`Número da conta: ${contaIsabela.numeroConta}`);
console.log(`Saldo total da conta: ${contaIsabela.saldo} \n`);

contaIsabela.depositar(100);
contaIsabela.sacar(50);

contaIsabela.transferir(100, contaSamy);
console.log(`Saldo após transferência: ${contaIsabela.saldo} \n`);
console.log(`Saldo da conta destino após transferência: ${contaSamy.saldoTotal} \n`);