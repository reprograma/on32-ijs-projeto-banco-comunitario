import { v4 as uuid } from 'uuid';
import { Client } from '../Client/Client.class';
import { Account } from '../Account/Account.class';
import { CheckingAccount } from '../Account/CheckingAccount.class';
import { IBankingServiceAccounts } from './BankingService.interface';
import { TAccountsTypes, TAccounts } from '../Account/Account.interface';

export class BankingService {
  private accounts: IBankingServiceAccounts[] = [];

  // PROVISORY ACCOUNT NUMBER GENERATION
  generateAccountNumber(): string {
    return uuid();
  }

  createAccount(client: Client, account: Account | CheckingAccount) {
    const type = account.constructor.name as TAccountsTypes;

    const { clientId, balance, accountNumber } = account;
    const clientAlreadyHasCheckingAccount = this.accounts.some(
      (account: IBankingServiceAccounts) =>
        account.clientId === client.id && account.type === type
    );

    if (account instanceof CheckingAccount && clientAlreadyHasCheckingAccount) {
      return console.error('The client already has a checking account');
    }

    this.accounts.push({
      clientId,
      balance,
      accountNumber,
      type,
    });

  }

  findAccount(account: TAccounts) {
    const result = this.accounts.find(
      ({ accountNumber }: IBankingServiceAccounts) =>
        accountNumber === account.accountNumber
    );

    if (!result) return console.error('Not fouded account');

    return result;
  }

  transfer(
    originAccount: TAccounts,
    destinationAccount: TAccounts,
    amount: number
  ) {
    if (amount > originAccount.balance) {
      return console.error('Insufficient balance');
    }

    originAccount.debit(amount);
    destinationAccount.deposit(amount);

    const foundedOrigin = this.findAccount(originAccount);
    const foundedDestination = this.findAccount(destinationAccount);

    if (foundedOrigin) {
      foundedOrigin.balance = originAccount.balance;
    }

    if (foundedDestination) {
      foundedDestination.balance = destinationAccount.balance;
    }
  }
}
