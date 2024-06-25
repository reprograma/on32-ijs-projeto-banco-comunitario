import { Conta } from './conta';
import { menuOperacoes } from './conta';
import { Cliente } from './cliente';

export class ContaCorrente extends Conta {

  private limiteChequeEspecial: number;

  constructor(cliente: Cliente, agencia: string, numeroConta: string, saldo: number, limiteChequeEspecial: number) {
    super(cliente, agencia, numeroConta, saldo, "corrente");
    this.limiteChequeEspecial = 100.00;
  }
  getLimiteChequeEspecial(): number {
    return this.limiteChequeEspecial;
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
    } else if (this.saldo + this.limiteChequeEspecial >= valor) {
      const limiteDisponivel = this.saldo + this.limiteChequeEspecial;
      console.log(`Saldo insuficiente! Limite disponível: ${limiteDisponivel}`);
    } else {
      console.log('Saldo e limite do cheque especial insuficientes!');
    }
  }
}

export function exibirContaCorrente(conta: Conta | undefined) {
  if (conta instanceof ContaCorrente) {
    console.log(`Agência: ${conta.getAgencia()}\nConta: ${conta.getNumeroConta()}\nSaldo: ${conta.getSaldo()}\nLimite do Cheque Especial: ${conta.getLimiteChequeEspecial()}`);
    menuOperacoes(conta);
  } else {
    console.log('Conta corrente não encontrada.');
  }

  
}



