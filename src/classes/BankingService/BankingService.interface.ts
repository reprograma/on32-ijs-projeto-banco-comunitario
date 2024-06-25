import { TAccountsTypes } from "../Account/Account.interface";

export interface IBankingServiceAccounts {
  clientId: string;
  balance: number;
  accountNumber: number | string;
  type: TAccountsTypes;
}
