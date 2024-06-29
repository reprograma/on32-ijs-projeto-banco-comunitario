import { Client, Account, AccountCorrent, AccountSavings } from "./interfaces";

// Base para a  conta
abstract class AccountBase implements Account {
    /*
     foi adiciona o contrutor como uma forma de elimina a necessidade de declarar
      as propriedades separadamente e fazer atribuição do valor.
     */
    constructor(
        public client: Client,
        public balance: number
    ) {}
    
    //Depósito
    deposit(value: number): string {
        this.balance += value;
        return `Seu depósito no valor de R$ ${value} foi realizado com sucesso. Seu saldo atual é de R$ ${this.balance}`;
    }

    //Saque
    toWithdraw(value: number): string {
        if (this.balance >= value) {
            this.balance -= value;
            return `O saque no valor de R$${value} foi realizado com sucesso. Seu novo saldo é de R$ ${this.balance}`;
        }
        return `Seu saldo é insuficiente para o valor solicitado. Seu saldo atual é de R$ ${this.balance}`;
    }
    
     // Transferência

    transfer(value: number, destinationAccount: Account): string {
        const withdrawalMessage = this.toWithdraw(value);
        if (withdrawalMessage.startsWith("Saque de R$")) {
            destinationAccount.deposit(value);
            return `Transferência de R$${value} realizada para a conta de ${destinationAccount.client.name}.`;
        }
        return `Transferência de R$${value} falhou. Saldo insuficiente.`;
    }
}

// lógica para um sistema de conta corrente
class AccountCorrentImpl extends AccountBase implements AccountCorrent {
    specialCheckLimit: number = 100;

    toWithdraw(value: number): string {
        if (this.balance + this.specialCheckLimit >= value) {
            this.balance -= value;
            return `Cuidado! Seu saque de R$ ${value} foi realizado. Fique atento: Você está usando seu cheque especial. Seu saldo atual é de R$ ${this.balance}`;
        }
        return "Você não possui saldo.";
    }
}

// lógica para conta poupança considerei um rendimento de 102% de CDI

class AccountSavingsImpl extends AccountBase implements AccountSavings {
    
    // Calcula o rendimento e aplica ao saldo da conta
    applyInterest(cdiRate: number): string {
        const rendimentoAnual = this.balance * (cdiRate / 100);
        const rendimentoMensal = rendimentoAnual / 12;
        this.balance += rendimentoMensal * 1.02; // 102% do CDI
        return `Rendimento em conta é de R$ ${rendimentoMensal * 1.02} aplicando 102% de CDI. Seu saldo atual é de R$ ${this.balance}`;
    }
}

// Gerenciamento de clientes e contas

class Bank {
    private clients: Client[] = [];
    private accounts: Account[] = [];

    addClient(client: Client): string {
        this.clients.push(client);
        return `Cliente ${client.name} adicionado com sucesso.`;
    }

    createAccount(client: Client, type: 'accountCorrent' | 'accountSavings'): string {
        if (type === 'accountCorrent' && client.salaryIncome >= 500) {
            const account = new AccountCorrentImpl(client, 0);
            this.accounts.push(account);
            return `Parabéns,${client.name}! A sua conta corrente foi criada com sucesso. O banco reprograma agradece!`;
        } else if (type === 'accountSavings') {
            const account = new AccountSavingsImpl(client, 0);
            this.accounts.push(account);
            return `Caro, ${client.name}! Sua conta poupança foi criada com sucesso. Lembrando que já está rendendo 102% CDI .`;
        } else {
            return `Caro, ${client.name}, não foi possível abrir sua conta com a gente, pois não possui um dos requisitos para a abertura de conta`;
        }
    }

    getAccountByClientId(clientId: string): Account | undefined {
        return this.accounts.find(account => account.client.id === clientId);
    }

    depositToAccount(clientId: string, value: number): string {
        const account = this.getAccountByClientId(clientId);
        if (account) {
            return account.deposit(value);
        }
        return `Não foi possível realizar o deposíto, pois não encontramos uma conta para este ID ${clientId}.`;
    }

    withdrawFromAccount(clientId: string, value: number): string {
        const account = this.getAccountByClientId(clientId);
        if (account) {
            return account.toWithdraw(value);
        }
        return `Não foi possível realizar a transferência, pois não encontramos uma conta para este ID${clientId}.`;
    }
    // 

    transferBetweenAccounts(clientIdFrom: string, clientIdTo: string, value: number): string {
        const accountFrom = this.getAccountByClientId(clientIdFrom);
        const accountTo = this.getAccountByClientId(clientIdTo);
        if (accountFrom && accountTo) {
            return accountFrom.transfer(value, accountTo);
        }
        return `Conta não encontrada para um dos clientes.`;
    }
}
