import { ContaTipoEnum } from "../enums/conta-tipo.enum";
import { ContaBancaria } from "./interfaces/conta.interface";

export class Conta implements ContaBancaria {
    public tipo: ContaTipoEnum
    public saldo: number

    constructor(
        tipo: ContaTipoEnum,
        saldo: number = 0
    ) {
        this.tipo = tipo
        this.saldo = saldo
    }

    criarConta(): boolean {
        console.log(`A conta do cliente está sendo criada...`);
        return true;
    }

    depositar(valor:number):void {
        this.saldo += valor;
        console.log(`O valor do deposito é ${valor}, o valor atualizado agora é ${this.saldo}`);

    }

    sacar(valor: number): boolean{
        if(this.saldo >= valor) {
            this.saldo -= valor;
            console.log(`A quantia ${valor} está sendo sacada, agora você tem ${this.saldo}`);
            return true;
        }
        return false;
    }

    transferir(valor: number, contaDestino: ContaBancaria): boolean {
        if(this.sacar(valor)) {
            contaDestino.depositar(valor);
            return true;
        }
        return false;
    }
}