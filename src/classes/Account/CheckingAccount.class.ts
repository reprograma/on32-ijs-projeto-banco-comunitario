import { Account } from './Account.class';

export class CheckingAccount extends Account {
  private isOverdraftApplied: boolean = false;
  private overdraftBalanceValue = 100.0;

  constructor(
    protected _clientId: string,
    protected _accountNumber: number | string,
    protected _balance: number = 0.0
  ) {
    super(_clientId,_accountNumber, _balance);
    this.applyOverdraftBalance();
  }

  private applyOverdraftBalance(): void {
    if (this._balance >= 500 && !this.isOverdraftApplied) {
      this._balance += this.overdraftBalanceValue;
      this.isOverdraftApplied = true;
    }
  }

  deposit(amount: number) {
    super.deposit(amount);
    this.applyOverdraftBalance();
  }
}
