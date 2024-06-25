import readline from 'readline';
import criypto from 'crypto';
import { Cliente, clientesDoBanco} from "./cliente";
import { menuInicial } from "./index";
import { ContaCorrente, exibirContaCorrente} from './contaCorrente';
import { ContaPoupanca, exibirContaPoupanca } from './contaPoupanca';

export class Conta {
  private cliente: Cliente;
  protected agencia: string;
  protected numeroConta: string;
  protected saldo: number;
  protected tipoConta: "corrente" | "poupança";

  constructor(cliente: Cliente, agencia: string, numeroConta: string, saldo: number, tipoConta: "corrente" | "poupança"){
    this.cliente = cliente;
    this.agencia = agencia;
    this.numeroConta = numeroConta;
    this.saldo = saldo;
    this.tipoConta = tipoConta;
  }

  getClienteId(): string {
    return this.cliente.getId();
  }

  getTipoConta(): "corrente" | "poupança" {
    return this.tipoConta;
  }

  getNumeroConta(): string {
    return this.numeroConta;
  }

  public depositar(valor: number): void {
    this.saldo += valor;
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let escolhaTipoConta:  "corrente" | "poupança";

 export function novaConta(cliente: Cliente){
  rl.question('Qual o tipo da conta?\n1 - Conta Corrente\n2 - Conta poupança\n', (respostaTipoConta) => {
    if(respostaTipoConta === '1'){
      escolhaTipoConta = "corrente";
    }
    else if(respostaTipoConta === '2'){
      escolhaTipoConta = "poupança";
    }
    else {
      console.log("Opção inválida!");
      menuInicial();
    }
  });

    const agencia = "0001"; // Agência padrão
    const numeroConta = criypto.randomUUID().slice(0, 8); // Número da conta com 8 caracteres gerados aleatoriamente
    const saldo = 0;
    const tipoConta = escolhaTipoConta;
    const novaConta = new Conta(cliente, agencia, numeroConta, saldo, tipoConta);
    console.log(`Conta criada com sucesso! Agência: ${agencia}, Conta: ${numeroConta}`);
    cliente.adicionarConta(novaConta);
}

export function menuContas(cliente: Cliente){
  console.log('Escolha uma opção:');
  console.log('1 - Visualizar conta corrente');
  console.log('2 - Visualizar conta poupança');
  console.log('3 - Voltar ao menu anterior');

  rl.question('Opção: ', (opcao) => {
    switch (opcao) {
      case '1':
        const contaCorrente = cliente.getContasAssociadas().find(conta => conta.getTipoConta() === "corrente");
        exibirContaCorrente(contaCorrente);
        break;
      case '2':
        const contaPoupanca = cliente.getContasAssociadas().find(conta => conta.getTipoConta() === "poupança");
        exibirContaPoupanca(contaPoupanca);
        break;
      case '3':
        menuInicial();
        break;
      default:
        console.log('Opção inválida!');
        menuContas(cliente);
    }
  }
  );
  return cliente;
}

export function menuOperacoes(conta: Conta){
  console.log('Escolha uma opção:');
  console.log('1 - Depositar');
  console.log('2 - Sacar');
  console.log('3 - Transferir dinheiro entre contas');

  rl.question('Opção: ', (opcao) => {
    switch (opcao) {
      case '1':
        depositar(conta);
        break;
      case '2':
        if (conta instanceof ContaCorrente) {
          sacar(conta);
        } else if (conta instanceof ContaPoupanca) {
          sacarPoupanca(conta);
        }
        break;
      case '3':
        if (conta instanceof ContaCorrente) {
          transferirContaCorrente(conta);
        } else if (conta instanceof ContaPoupanca) {
          transferirPoupanca(conta);
        }
        break;
      default:
        console.log('Opção inválida!');
        menuOperacoes(conta);
    }
  });
}

function depositar(conta: Conta) {
  rl.question('Digite o valor do depósito: ', (resposta) => {
    const valor = Number(resposta);
    if (!isNaN(valor) && valor > 0) {
      conta.depositar(valor);
      console.log('Depósito efetuado com sucesso!');
    } else {
      console.log('Valor inválido!');
    }
    menuOperacoes(conta);
  });
}


function sacar(conta: ContaCorrente) : void{
  rl.question('Digite o valor do saque: ', (valor) => {
    const valorSaque = Number(valor);
    if (conta.getSaldo() >= valorSaque) {
      conta.sacar(valorSaque);
      console.log('Saque efetuado com sucesso! Saldo atual:', conta.getSaldo());
    } else if (conta.getSaldo() + conta.getLimiteChequeEspecial() >= valorSaque) {
      const limiteDisponivel = conta.getSaldo() + conta.getLimiteChequeEspecial();
      console.log(`Saldo insuficiente! Limite disponível: ${limiteDisponivel}`);
    } else {
      console.log('Saldo e limite do cheque especial insuficientes!');
    }
    menuOperacoes(conta);
  });
}

function sacarPoupanca(conta: ContaPoupanca) {
  rl.question('Digite o valor do saque: ', (valor) => {
    const valorSaque = Number(valor);
    if (conta.getSaldo() >= valorSaque) {
      conta.sacar(valorSaque);
      console.log('Saque efetuado com sucesso! Saldo atual:', conta.getSaldo());
    } else {
      console.log('Saldo insuficiente!');
    }
    menuOperacoes(conta);
  });
}

function transferirContaCorrente(conta: ContaCorrente) {
  rl.question('Digite o número da conta de destino: ', (numeroContaDestino) => {
    const contaDestino = clientesDoBanco.flatMap(cliente => cliente.getContasAssociadas()).find(conta => conta.getNumeroConta() === numeroContaDestino);
    if (contaDestino) {
      rl.question('Digite o valor da transferência: ', (valor) => {
        const valorTransferencia = Number(valor);
        if (conta.getSaldo() >= valorTransferencia) {
          conta.sacar(valorTransferencia);
          contaDestino.depositar(valorTransferencia);
          console.log('Transferência realizada com sucesso!');
        } else if (conta.getSaldo() + conta.getLimiteChequeEspecial() >= valorTransferencia) {
          const limiteDisponivel = conta.getSaldo() + conta.getLimiteChequeEspecial();
          console.log(`Saldo insuficiente! Limite disponível: ${limiteDisponivel}`);
        } else {
          console.log('Saldo e limite do cheque especial insuficientes!');
        }
        menuOperacoes(conta);
      });
    } else {
      console.log('Conta de destino não encontrada!');
      menuOperacoes(conta);
    }
  });
}

function transferirPoupanca(conta: ContaPoupanca) {
  rl.question('Digite o número da conta de destino: ', (numeroContaDestino) => {
    const contaDestino = clientesDoBanco.flatMap(cliente => cliente.getContasAssociadas()).find(conta => conta.getNumeroConta() === numeroContaDestino);
    if (contaDestino) {
      rl.question('Digite o valor da transferência: ', (valor) => {
        const valorTransferencia = Number(valor);
        if (conta.getSaldo() >= valorTransferencia) {
          conta.sacar(valorTransferencia);
          contaDestino.depositar(valorTransferencia);
          console.log('Transferência realizada com sucesso!');
        } else {
          console.log('Saldo insuficiente!');
        }
        menuOperacoes(conta);
      });
    } else {
      console.log('Conta de destino não encontrada!');
      menuOperacoes(conta);
    }
  });
}