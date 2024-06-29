// Interface for Clients
export interface Client {
    name: string;
    id: string;
    address: string;
    phone: string;
    emailAddress: string;
    salaryIncome: number;
    rg: number;
    cpf: number;
    dateOfIssueRG: Date;
    issuingBodyRG: string;
    dateOfBirth: Date;
    image: Uint8Array;
}

// Interface for Accounts
export interface Account {
    client: Client;
    balance: number;
    deposit(value: number): string;
    toWithdraw(value: number): string;
    transfer(value: number, accountDestino: Account): string;
}

export interface AccountCorrent extends Account {
    specialCheckLimit: number;
}

export interface AccountSavings extends Account {}
