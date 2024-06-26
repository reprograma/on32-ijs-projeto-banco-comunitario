import { Cliente } from "./Cliente";

export interface Conta {
  cliente: Cliente;
  saldo: number;
  depositar(valor: number): void;
  sacar(valor: number): void;
  transferir(contaDestino: Conta, valor: number): void;
}
