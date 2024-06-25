import { ContaTipoEnum } from "./Enums/contaTipo.enum";
import { CadastraContas } from "./classes/cadastraContas";
import { Cliente } from "./classes/cliente";
import { ContaCorrente } from "./classes/contaCorrente";
import { ContaPoupanca } from "./classes/contaPoupanca";

const CadastroConta = new CadastraContas();

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

const cliente03 = new Cliente("Isabela", 81996018693, 'Rua Pedro de Souza Leão, 100', 499);
console.log(`
Dados do Cliente:
Nome: ${cliente03.nome}
ID: ${cliente03.id}
Número de Telefone: ${cliente03.numeroTelefone}
Endereço: ${cliente03.endereco}
Renda Mensal: ${cliente03.rendaMensal}
`);

CadastroConta.abrirConta(cliente01, ContaTipoEnum.CORRENTE,0);
CadastroConta.abrirConta(cliente02, ContaTipoEnum.POUPANCA,0);
CadastroConta.abrirConta(cliente03, ContaTipoEnum.CORRENTE,0);

CadastroConta.listarContas();

const contaSamy = new ContaCorrente(0);

console.log(`Número da conta: ${contaSamy.numeroConta}`);
console.log(`Saldo total da conta: ${contaSamy.saldo} \n`);


contaSamy.depositar(500);

console.log(`Saldo com cheque especial incluso: ${contaSamy.saldoTotal} \n`);

contaSamy.sacar(100);

const contaDestino = new ContaCorrente(0);

contaSamy.transferir(450, contaDestino);
console.log(`Saldo após transferência: ${contaSamy.saldoTotal} \n`);
console.log(`Saldo da conta destino após transferência: ${contaDestino.saldoTotal} \n`);

console.log('\n =================================================== \n')

const contaDenis = new ContaPoupanca(100);

console.log(`Número da conta: ${contaDenis.numeroConta}`);
console.log(`Saldo total da conta: ${contaDenis.saldo} \n`);


contaDenis.depositar(500);

contaDenis.sacar(100);

const contaDestino1 = new ContaCorrente(0);

contaDenis.transferir(450, contaDestino);
console.log(`Saldo após transferência: ${contaDenis.saldo} \n`);
console.log(`Saldo da conta destino após transferência: ${contaDestino.saldoTotal} \n`);