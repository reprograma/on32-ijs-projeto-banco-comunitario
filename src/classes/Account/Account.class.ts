import { IAccount } from './Account.interface';

export class Account implements IAccount {
  constructor(
    protected _clientId: string,
    protected _accountNumber: number | string,
    protected _balance: number = 0.0
  ) {}

  get clientId(): string {
    return this._clientId;
  }

  get accountNumber(): number | string {
    return this._accountNumber;
  }

  get balance(): number {
    return this._balance;
  }

  deposit(amount: number) {
    this._balance += amount;
  }

  withdraw(amount: number) {
    if (amount > this._balance) {
      console.error('Insufficient balance');
      return;
    }
    this._balance -= amount;
    console.log(`Withdrawn: $${amount}. New balance: $${this._balance}`);
  }

  debit(amount: number) {
    if (amount > this._balance) {
      console.error('Insufficient balance');
      return;
    }
    this._balance -= amount;
    console.log(`Debited: $${amount}. New balance: $${this._balance}`);
  }
}
