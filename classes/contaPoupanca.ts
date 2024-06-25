import { ContaTipoEnum } from "../Enums/contaTipo.enum";
import { ContaInterface } from "../interfaces/conta.interface";
import { Cliente } from "./cliente";

function geraNumeroConta(): number {
    const min = 100000000;
    const max = 999999999;
    const numeroConta = Math.floor(Math.random() * (max - min + 1)) + min;
    return numeroConta;
}

export class ContaPoupanca implements ContaInterface {

    public tipo: ContaTipoEnum;
    private _numeroConta: number;
    private _saldo: number;
    private _cliente: Cliente | undefined;

    constructor(cliente: Cliente, saldo: number) {

        this.tipo = ContaTipoEnum.POUPANCA,
        this._numeroConta = geraNumeroConta(),
        this._saldo = saldo,
        this._cliente = cliente
    }
    
    public get numeroConta() : number {
        return this._numeroConta;
    }
    
    public get saldo() : number {
        return this._saldo;
    }

    depositar(valor: number){
        this._saldo += valor;
        console.log(`Saldo após o depósito: ${this._saldo} \n`);
    } 
    sacar(valor: number){
        if (valor > this._saldo) {
            return console.log(`Sque não realizado! Saldo insuficiente! Seu saldo é de ${this._saldo} \n`);
            
        } else {
            this._saldo -= valor;
            console.log(`Saque de ${valor} realizado com sucesso.\nSaldo atual: ${this._saldo} \n\n`);
        }
    }
    transferir(valor: number, contaDestino: ContaInterface){
        if (valor > this._saldo) {
            console.log(`Transferência não realizada! Saldo insuficiente!\nSeu saldo é de ${this._saldo} \n`);   
        } else {
            this._saldo -= valor;
            //contaDestino.saldo = contaDestino.saldo + valor;
            console.log(`Transferência realizada. Saldo atual: ${this._saldo} \n`);
            contaDestino.depositar(valor);
            console.log(`Transferência de ${valor} realizada para a conta ${contaDestino.numeroConta}. \n`);
        }
    }
    
}