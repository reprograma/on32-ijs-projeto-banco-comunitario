import { ContaTipoEnum } from "./enums/tipoConta";
import { Conta } from "./interface/interfaceAccount";
import { interfaceClient } from "../cliente/interface/interfaceClient";

export class ContaCorrente implements Conta {
 type: ContaTipoEnum = ContaTipoEnum.CORRENTE;
 numeroConta: string;
 saldo: number = 0;
 limiteChequeEspecial: number = 100;
 client: interfaceClient;

 constructor(numeroConta: string, client: interfaceClient) {
  this.numeroConta = numeroConta;
  this.client = client;
 }

 depositar(valor: number): string {
  this.saldo += valor;
  return `Depósito de R$ ${valor.toFixed(2)} realizado com sucesso. Novo saldo: R$ ${this.saldo.toFixed(2)}`;
 }

 sacar(valor: number): string {
  if (valor <= this.saldo + this.limiteChequeEspecial) {
   this.saldo -= valor;
   return `Saque de R$ ${valor.toFixed(2)} realizado com sucesso. Novo saldo: R$ ${this.saldo.toFixed(2)}`;
  }
  return `Saldo insuficiente para saque de R$ ${valor.toFixed(2)}.`;
 }

 transferir(valor: number, paraConta: Conta): string {
  if (this.sacar(valor)) {
   paraConta.depositar(valor);
   return `Transferência de R$ ${valor.toFixed(2)} para conta ${paraConta.numeroConta} realizada com sucesso.`;
  }
  return `Transferência de R$ ${valor.toFixed(2)} não realizada. Saldo insuficiente.`;
 }
}