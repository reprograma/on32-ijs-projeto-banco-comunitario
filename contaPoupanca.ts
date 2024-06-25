import  { menuOperacoes } from './conta';
import { Conta } from './conta';
import { Cliente } from './cliente';

export class ContaPoupanca extends Conta {

  private taxaJuros: number;
  constructor(cliente: Cliente, agencia: string, numeroConta: string, saldo: number, limiteChequeEspecial: number) {
    super(cliente, agencia, numeroConta, saldo, "poupança");
    this.taxaJuros = 0.5; // Taxa de juros hipotética de 0,5% ao mê
}
  
    getTaxaJuros(): number {
      return this.taxaJuros;
    }
  
    getAgencia(): string {
      return this.agencia;
    }
  
    getNumeroConta(): string {
      return this.numeroConta;
    }
  
    getSaldo(): number {
      return this.saldo;
    }

    sacar(valor: number): void {
      if (this.saldo >= valor) {
        this.saldo -= valor;
      } else {
        console.log('Saldo insuficiente!');
      }
    }
}

export function exibirContaPoupanca(conta: Conta | undefined) {
  if (conta instanceof ContaPoupanca) {
    console.log(`Agência: ${conta.getAgencia()}\nConta: ${conta.getNumeroConta()}\nSaldo: ${conta.getSaldo()}\nTaxa de Juros: ${conta.getTaxaJuros()}`);
    menuOperacoes(conta);
  } else {
    console.log('Conta poupança não encontrada.');
  }
}
