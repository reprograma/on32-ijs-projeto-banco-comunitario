import { Conta } from "./conta";
import { ContaTipoEnum } from "../enums/conta-tipo.enum";

class ContaCorrente extends Conta {
    public saldo:number
    public tipo: ContaTipoEnum.CORRENTE
    private limiteChequeEspecial: number = 100;

    constructor(saldo: number = 0) {
        super(ContaTipoEnum.CORRENTE, saldo)
    }

    sacar(valor:number): boolean {
        if(this.saldo + this.limiteChequeEspecial >= valor) {
            this.saldo -= valor;
            console.log(`Saque realizado com sucesso no valor de ${valor}`)
            return true;
        }
        return false
    }
}