import { v4 as uuid } from 'uuid';
import { IClientInterface } from './Client.interface';

export class Client implements IClientInterface {
  protected _id: string = uuid();

  constructor(
    private _fullName: string,
    private _homeAddress: string,
    private _telNumber: number,
    protected _salaryIncome: number
  ) {}

  get fullName() {
    return this._fullName;
  }

  get homeAddress() {
    return this._homeAddress;
  }

  get id() {
    return this._id;
  }

  get telNumber() {
    return this._telNumber;
  }

  set fullName(newFullName: string) {
    this._fullName = newFullName;
  }

  set homeAddress(newAddress: string) {
    this._homeAddress = newAddress;
  }

  set telNumber(newTelNumber: number) {
    this._telNumber = newTelNumber;
  }

  get salaryIncome(): number {
    return this.salaryIncome;
  }

  set salaryIncome(salary: number) {
    this._salaryIncome = salary;
  }
}
