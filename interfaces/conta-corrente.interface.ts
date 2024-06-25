import { IConta } from "./conta-bancaria.interface";

export interface IContaCorrente extends IConta {
    limiteChequeEspecial: number;
}