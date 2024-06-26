
import { Conta } from "./conta"

export class ContaCorrente extends Conta {
  private chequeEspecialAplicado: boolean = false
  private valorChequeEspecial = 100.0

  constructor(
    protected _clienteId: string,
    protected _numeroConta: number | string,
    protected _saldo: number = 0.0
  ) {
    super(_clienteId, _numeroConta, _saldo)
    this.aplicarChequeEspecial()
  }

  private aplicarChequeEspecial(): void {
    if (this._saldo >= 500 && !this.chequeEspecialAplicado) {
      this._saldo += this.valorChequeEspecial
      this.chequeEspecialAplicado = true
    }
  }

  depositar(quantia: number) {
    super.depositar(quantia)
    this.aplicarChequeEspecial()
  }
}
