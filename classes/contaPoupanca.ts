import { Clientes } from "../interfaces/Cliente";
import { Conta } from "./conta";

export class ContaPoupanca extends Conta {
    constructor(numeroConta: string, cliente: Clientes) {
        super(numeroConta, cliente);
    }
}