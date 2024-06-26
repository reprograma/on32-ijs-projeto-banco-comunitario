import { interfaceClient } from "./interface/interfaceClient";

export class Client implements interfaceClient {
    id: number;
    private _name: string;
    private _adress: string;
    private _phone: number;
    private _salaryIncome: number;

    constructor(name: string, adress: string, phone: number, salaryIncome: number, id: number) {
        this.id = id;
        this._name = name;
        this._adress = adress;
        this._phone = phone;
        this._salaryIncome = salaryIncome;
    }

    public get name(): string {
        return this._name;
    }

    public get adress(): string {
        return this._adress;
    }

    public get phone(): number {
        return this._phone;
    }

    public get salaryIncome(): number {
        return this._salaryIncome;
    }
}
