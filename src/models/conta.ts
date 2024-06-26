import { IConta } from "../interfaces/conta.interface"

export class Conta implements IConta {
  constructor(
    protected _clienteId: string,
    protected _numeroConta: number | string,
    protected _saldo: number = 0.0
  ) {}

  get clienteId(): string {
    return this._clienteId
  }

  get numeroConta(): number | string {
    return this._numeroConta
  }

  get saldo(): number {
    return this._saldo
  }

  depositar(quantia: number) {
    this._saldo += quantia
  }

  sacar(quantia: number) {
    if (quantia > this._saldo) {
      console.error('Saldo insuficiente')
      return
    }
    this._saldo -= quantia
    console.info(`Saque: ${quantia.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}. Novo saldo: ${this._saldo.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`)
  }

  debitar(quantia: number) {
    if (quantia > this._saldo) {
      console.error('Saldo insuficiente')
      return
    }
    this._saldo -= quantia
    console.info(`Débito: ${quantia.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}. Novo saldo: ${this._saldo.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`)
  }
}
