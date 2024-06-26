import { Cliente } from "../interfaces/Cliente";
import { Conta } from "../interfaces/Conta";

export class ContaCorrente implements Conta {
  cliente: Cliente;
  saldo: number;
  limiteChequeEspecial: number;

  constructor(cliente: Cliente) {
    this.cliente = cliente;
    this.saldo = 0;
    this.limiteChequeEspecial = 100;
  }

  depositar(valor: number): void {
    this.saldo += valor;
    console.log(`Valor depositado: R$ ${valor}. Novo saldo: R$ ${this.saldo}`);
  }

  sacar(valor: number): void {
    const saldoComChequeEspecial = this.saldo + this.limiteChequeEspecial;
    if (valor <= saldoComChequeEspecial) {
      this.saldo -= valor;
      console.log(`Valor do saque: R$ ${valor}. Novo saldo: R$ ${this.saldo}`);
    } else {
      console.log("Saldo insuficiente.");
    }
  }

  transferir(contaDestino: Conta, valor: number): void {
    const saldoComChequeEspecial = this.saldo + this.limiteChequeEspecial;
    if (valor <= saldoComChequeEspecial) {
      this.saldo -= valor;
      contaDestino.depositar(valor);
      console.log(
        `O valor de R$ ${valor} foi transferido para ${contaDestino.cliente.nome}.`
      );
    } else {
      console.log("Saldo insuficiente.");
    }
  }
}
