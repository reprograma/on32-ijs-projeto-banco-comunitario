import { Account } from './classes/Account/Account.class';
import { CheckingAccount } from './classes/Account/CheckingAccount.class';
import { BankingService } from './classes/BankingService/BankingService.class';
import { Client } from './classes/Client/Client.class';

const banking_service = new BankingService();

// CREATE CLIENTS
const client_1 = new Client(
  'Laura Macedo Ferreira',
  'Av. Flores - 11 - RJ',
  2199999999,
  3000.0
);

const client_2 = new Client(
  'Mariana da Silva Moreira',
  'Rua da Liberdade - 1020 - SP',
  218888888,
  10000.0
);

//CREATE ACCOUNT INSTANCES
const checking_account = new CheckingAccount(
  client_1.id,
  banking_service.generateAccountNumber(),
  0
);

const savings_account = new Account(
  client_2.id,
  banking_service.generateAccountNumber()
);

// CREATE ACCOUNTS
banking_service.createAccount(client_1, checking_account);
banking_service.createAccount(client_2, savings_account);

// DO OPERATIONS
checking_account.deposit(400);
banking_service.transfer(checking_account, savings_account, 300);
banking_service.transfer(checking_account, savings_account, 50);

//  CHECK BALANCE
console.log(checking_account.balance);

//CREATE SECOND CHECKING ACCOUNT TO CLIENT 2 - WILL RETURN THE MESSAGE 'The client already has a checking account'
const checking_account_2 = new CheckingAccount(
  client_1.id,
  banking_service.generateAccountNumber(),
  300
);

banking_service.createAccount(client_1, checking_account_2);
