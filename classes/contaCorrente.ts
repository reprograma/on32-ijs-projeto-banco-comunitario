import { ContaTipoEnum } from "../Enums/contaTipo.enum";
import { ContaInterface } from "../interfaces/conta.interface";
import { Cliente } from "./cliente";

function geraNumeroConta(): number {
    const min = 100000000;
    const max = 999999999;
    const numeroConta = Math.floor(Math.random() * (max - min + 1)) + min;
    return numeroConta;
}

export class ContaCorrente implements ContaInterface {

    public tipo: ContaTipoEnum;
    private _numeroConta: number;
    private _saldo: number;
    private _chequeEspecial: number;
    private _saldoTotal: number;
    private _cliente: Cliente | undefined;

    constructor(cliente: Cliente, saldo: number, chequeEspecial: number = 100) {
        if (cliente.rendaMensal < 500) {
            throw new Error( `Não foi possível abrir a conta, ${cliente.nome}. Sua renda tem que ser a partir de 500 reais.\n`);
        }else{
            console.log(`Parabéns, ${cliente.nome}. Sua conta foi aberta com sucesso!\n`)
        }

        this.tipo = ContaTipoEnum.CORRENTE,
        this._numeroConta = geraNumeroConta(),
        this._saldo = saldo,
        this._chequeEspecial = chequeEspecial,
        this._saldoTotal = this._saldo + this._chequeEspecial,
        this._cliente = cliente 
    }
    
    public get numeroConta(): number {
        return this._numeroConta;
    }
    
    public get saldo(): number {
        return this._saldo;
    }

    public get chequeEspecial(): number {
        return this._chequeEspecial;
    }
    
    public get saldoTotal(): number {
        return this._chequeEspecial + this._saldo;
    }
    
    depositar(valor: number){
        this._saldo += valor;
        console.log(`Depósito realizado para a conta ${this._numeroConta} - ${this._cliente?.nome}.\nSaldo atual: ${this._saldo} \n`);
    } 

    sacar(valor: number){
        if (valor > this.saldoTotal) {
            console.log(`Saque não realizado! Saldo insuficiente!\nSeu saldo total é de ${this.saldoTotal} \n`);
        } else {
            if (valor > this._saldo) {
                const valorExcedente = valor - this._saldo;
                if (valorExcedente > this._chequeEspecial) {
                    console.log(`Saque não realizado! Valor excede o saldo total disponível (incluindo cheque especial). \n`);
                } else {
                    this._saldo = 0;
                    this._chequeEspecial -= valorExcedente;
                    console.log(`Saque de ${valor} realizado utilizando cheque especial.\nSaldo atual: ${this._saldo} e cheque especial: ${this._chequeEspecial} \n`);
                }
            } else {
                this._saldo -= valor;
                console.log(`Saque de ${valor} realizado com sucesso.\nSaldo atual: ${this._saldo} \n`);
            }
        }
    }

    transferir(valor: number, contaDestino: ContaInterface){
        if (valor > this.saldoTotal) {
            console.log(`Transferência não realizada! Saldo insuficiente!\nSeu saldo total é de ${this.saldoTotal} \n`);
        } else {
            if (valor > this._saldo) {
                const valorExcedente = valor - this._saldo;
                if (valorExcedente > this._chequeEspecial) {
                    console.log(`Transferência não realizada! Valor excede o saldo total disponível (incluindo cheque especial). \n`);
                } else {
                    this._saldo = 0;
                    this._chequeEspecial -= valorExcedente;
                    console.log(`Transferência realizada de ${valor} utilizando cheque especial.\nSaldo atual: ${this._saldo} e cheque especial: ${this._chequeEspecial} \n`);
                    contaDestino.depositar(valor);
                    console.log(`Transferência de ${valor} realizada para a conta ${contaDestino.numeroConta}. \n`);
                }
            } else {
                this._saldo -= valor;
                console.log(`Transferência realizada. Saldo atual: ${this._saldo} \n`);
                contaDestino.depositar(valor);
                console.log(`Transferência de ${valor} realizada para a conta ${contaDestino.numeroConta}. \n`);
            }
        }
    }
    }

