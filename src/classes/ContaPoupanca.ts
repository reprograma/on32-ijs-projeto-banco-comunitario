import { Cliente } from "../interfaces/Cliente";
import { Conta } from "../interfaces/Conta";

export class ContaPoupanca implements Conta {
  cliente: Cliente;
  saldo: number;

  constructor(cliente: Cliente) {
    this.cliente = cliente;
    this.saldo = 0;
  }

  depositar(valor: number): void {
    this.saldo += valor;
    console.log(`Valor depositado: R$ ${valor}. Novo saldo: R$ ${this.saldo}`);
  }

  sacar(valor: number): void {
    if (valor <= this.saldo) {
      this.saldo -= valor;
      console.log(`Valor sacado: R$ ${valor}. Novo saldo: R$ ${this.saldo}`);
    } else {
      console.log("Saldo insuficiente.");
    }
  }

  transferir(contaDestino: Conta, valor: number): void {
    if (valor <= this.saldo) {
      this.saldo -= valor;
      contaDestino.depositar(valor);
      console.log(
        `Transferência no valor de R$ ${valor} para ${contaDestino.cliente.nome}.`
      );
    } else {
      console.log("Saldo insuficiente para transferência.");
    }
  }
}
