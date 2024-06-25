import { ClienteInterface } from "../interfaces/cliente.interface";

export class Cliente implements ClienteInterface{
    public nome: string;
    private _id: number;
    private _numeroTelefone: number;
    private _endereco: string;
    private _rendaMensal: number;

    private static nextId: number = 1;

    constructor(nome: string, numeroTelefone: number, endereco: string, rendaMensal: number){
        this.nome = nome,
        this._id = Cliente.nextId++,
        this._numeroTelefone = numeroTelefone,
        this._endereco = endereco,
        this._rendaMensal = rendaMensal
    }
    
    public get id() : number {
        return this._id;
    }

    public get numeroTelefone() : number {
        return this._numeroTelefone;
    }
    
    public get endereco() : string {
        return this._endereco; 
    }
    
    public get rendaMensal() : number{
        return this._rendaMensal
    }
}
