import { Account } from '../Account/Account.class';
import { CheckingAccount } from '../Account/CheckingAccount.class';

export interface IAccount {
  clientId: string;
  accountNumber: number | string;
  balance: number;
}

export type TAccountsTypes = 'Account' | 'CheckingAccount';
export type TAccounts = Account | CheckingAccount;
