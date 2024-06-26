import { Cliente } from './cliente'
import { ContaCorrente } from './contaCorrente'
import { Conta } from './conta'
import { TContas } from '../interfaces/conta.interface'
import { IServicoBancarioContas } from '../interfaces/servicoBancario.interface'

export class ServicoBancario {
  private registrosContas: IServicoBancarioContas[] = []
  private listaClientes: Cliente[] = []
  private numeroContaAtual: number = 1000

  gerarNumeroConta(): string {
    return (this.numeroContaAtual++).toString()
  }

  adicionarCliente(novoCliente: Cliente) {
    this.listaClientes.push(novoCliente)
  }

  listarClientes() {
    console.table(this.listaClientes.map(cliente => ({
      id: cliente.id,
      nomeCompleto: cliente.nomeCompleto,
      endereco: cliente.endereco,
      telefone: cliente.telefone,
      rendaSalarial: cliente.rendaSalarial.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    })))
  }

  adicionarConta(novoCliente: Cliente, novaConta: Conta | ContaCorrente) {
    const tipoNovaConta = novaConta instanceof ContaCorrente ? 'ContaCorrente' : 'Conta'

    const contaExistente = this.registrosContas.some(
      (conta) => conta.clienteId === novoCliente.id && conta.tipo === tipoNovaConta
    )

    if (novaConta instanceof ContaCorrente && contaExistente) {
      console.error('O cliente já possui uma conta corrente')
      return
    }

    this.registrosContas.push({
      clienteId: novaConta.clienteId,
      saldo: novaConta.saldo,
      numeroConta: novaConta.numeroConta,
      tipo: tipoNovaConta,
    })
  }

  obterContaPorNumero(numero: number | string): IServicoBancarioContas | undefined {
    const conta = this.registrosContas.find(
      (registro) => registro.numeroConta === numero
    )

    if (!conta) {
      console.error('Conta não encontrada')
    }

    return conta
  }

  efetuarTransferencia(
    origem: TContas,
    destino: TContas,
    quantia: number
  ) {
    if (quantia > origem.saldo) {
      console.error('Saldo insuficiente')
      return
    }

    origem.debitar(quantia)
    destino.depositar(quantia)

    const contaOrigem = this.obterContaPorNumero(origem.numeroConta)
    const contaDestino = this.obterContaPorNumero(destino.numeroConta)

    if (contaOrigem) {
      contaOrigem.saldo = origem.saldo
    }

    if (contaDestino) {
      contaDestino.saldo = destino.saldo
    }
  }
}
