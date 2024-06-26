// src/classes/Cliente/Cliente.class.ts
import { v4 as uuid } from 'uuid'
import { IClienteInterface } from '../interfaces/cliente.interface'

export class Cliente implements IClienteInterface {
  protected _id: string = uuid()

  constructor(
    private _nomeCompleto: string,
    private _endereco: string,
    private _telefone: string,
    protected _rendaSalarial: number
  ) {}

  get nomeCompleto() {
    return this._nomeCompleto
  }

  get endereco() {
    return this._endereco
  }

  get id() {
    return this._id
  }

  get telefone() {
    return this._telefone
  }

  set nomeCompleto(novoNomeCompleto: string) {
    this._nomeCompleto = novoNomeCompleto
  }

  set endereco(novoEndereco: string) {
    this._endereco = novoEndereco
  }

  set telefone(novoTelefone: string) {
    this._telefone = novoTelefone
  }

  get rendaSalarial(): number {
    return this._rendaSalarial
  }

  set rendaSalarial(novaRendaSalarial: number) {
    this._rendaSalarial = novaRendaSalarial
  }
}
