import { Cliente } from "./cliente";
import { ContaCorrente, ContaPoupanca } from "./conta"; 

const cliente1 = new Cliente("Erin Moraes", "Rua dos gafanhotos, número 7", "123456789", 1500);
const contaCorrente1 = new ContaCorrente();
cliente1.abrirConta(contaCorrente1);

const contaPoupanca1 = new ContaPoupanca(); 
cliente1.abrirConta(contaPoupanca1);

const cliente2 = new Cliente("Thais Maciel", "Rua do sol, nº 13", "987654321", 2000);
const contaCorrente2 = new ContaCorrente();
cliente2.abrirConta(contaCorrente2);

console.log("Informações de pessoas clientes:");
console.log(cliente1.getInformacoes());
console.log(cliente2.getInformacoes());

cliente1.depositarNaContaCorrente(1000);
cliente2.depositarNaContaCorrente(500);

console.log("Informações atualizadas após depósitos realizados:");
console.log(cliente1.getInformacoes());
console.log(cliente2.getInformacoes());

const mensagemTransferencia = cliente1.transferir(300, contaCorrente2);
console.log(mensagemTransferencia);

console.log("Informações finais e atualizadas de pessoas clientes:");
console.log(cliente1.getInformacoes());
console.log(cliente2.getInformacoes());

const depositoPoupancaMensagem = contaPoupanca1.depositar(600);
console.log(depositoPoupancaMensagem);

const limiteAberturaContaCorrente = 500;

if (contaPoupanca1.saldo >= limiteAberturaContaCorrente) {
    console.log(`O saldo na sua poupança atingiu R$${limiteAberturaContaCorrente}. Agora você pode abrir uma conta corrente.`);
}
