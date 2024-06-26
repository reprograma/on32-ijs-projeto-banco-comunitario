import Cliente from './Cliente';
import ContaCorrente from './ContaCorrente';
import ContaPoupanca from './ContaPoupanca';

// criaçao de um cliente
const cliente: Cliente = {
    id: "123",
    nomeCompleto: "João Silva",
    endereco: "Rua das Flores, 123",
    numeroTelefone: "99999-9999",
    rendaSalarial: 3000,
};

// verifica criação de conta corrente e conta poupança
if (cliente.rendaSalarial >= 500) {
    const contaCorrente = new ContaCorrente("001", cliente);
    contaCorrente.depositar(1000);
    console.log(`Saldo da conta corrente: ${contaCorrente.getSaldo()}`); // 1000

    const contaPoupanca = new ContaPoupanca("002", cliente);
    contaPoupanca.depositar(200);
    console.log(`Saldo da conta poupança: ${contaPoupanca.getSaldo()}`); // 200

    // transferência entre contas
    contaCorrente.transferir(500, contaPoupanca);
    console.log(`Saldo da conta corrente após transferência: ${contaCorrente.getSaldo()}`); // 500
    console.log(`Saldo da conta poupança após transferência: ${contaPoupanca.getSaldo()}`); // 700
} else {
    console.log("Cliente não possui renda suficiente para abrir uma conta corrente.");
}
