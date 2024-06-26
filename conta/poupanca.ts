import { Conta } from "./conta";
import { ContaTipoEnum } from "../enums/conta-tipo.enum";

class ContaPoupanca extends Conta {
    public saldo:number = 0
    public tipo: ContaTipoEnum.POUPANCA

    constructor(saldo: number = 0) {
        super(ContaTipoEnum.POUPANCA, saldo);
    }
}