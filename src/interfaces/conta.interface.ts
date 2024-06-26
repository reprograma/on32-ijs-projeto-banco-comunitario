import { Conta } from '../models/conta'
import { ContaCorrente } from '../models/contaCorrente'

export interface IConta {
  clienteId: string
  numeroConta: number | string
  saldo: number
}

export type TContasTipos = 'Conta' | 'ContaCorrente'
export type TContas = Conta | ContaCorrente