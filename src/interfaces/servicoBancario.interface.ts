import { TContasTipos } from "./conta.interface"

export interface IServicoBancarioContas {
  clienteId: string
  saldo: number
  numeroConta: number | string
  tipo: TContasTipos
}
