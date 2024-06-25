# on32-ijs-projeto-banco-comunitario

# Sistema Bancário Comunitário

Este projeto é um sistema bancário comunitário desenvolvido em TypeScript. O sistema permite criar clientes, abrir contas correntes e poupança, realizar depósitos, saques e transferências entre contas.

## Descrição

O sistema bancário comunitário foi criado para facilitar a gestão financeira de uma pequena comunidade. Com ele, os membros da comunidade podem abrir contas correntes e poupança, realizar operações bancárias como depósitos, saques e transferências, e manter um controle preciso de suas finanças. O sistema é implementado em TypeScript.

## Regras de Negócio

1. **Abertura de Conta Corrente:**
   - A conta corrente só pode ser aberta se o cliente tiver uma renda mensal mínima de R$ 500.
   - Cada cliente pode ter apenas uma conta corrente.

2. **Abertura de Conta Poupança:**
   - Não há restrições específicas para a abertura de contas poupança além das gerais.

3. **Depósitos:**
   - Clientes podem realizar depósitos em suas contas, o que aumenta o saldo disponível.

4. **Saques:**
   - Clientes podem realizar saques até o limite do saldo disponível, incluindo o cheque especial, se aplicável.
   - Saques que excedem o saldo disponível utilizando o cheque especial são permitidos, desde que dentro do limite do cheque especial.

5. **Transferências:**
   - Clientes podem transferir valores entre contas, desde que o saldo total (incluindo cheque especial) seja suficiente para cobrir a transferência.

## Estrutura do Projeto

O projeto está organizado da seguinte forma:

- `Enums/`
  - `contaTipo.enum.ts`: Enumeração para os tipos de conta (CORRENTE, POUPANCA).

- `interfaces/`
  - `conta.interface.ts`: Interface para a estrutura das contas.

- `classes/`
  - `cliente.ts`: Classe que define os atributos e métodos de um cliente.
  - `contaCorrente.ts`: Classe que define uma conta corrente e suas operações.
  - `contaPoupanca.ts`: Classe que define uma conta poupança e suas operações.

- `index.ts`: Arquivo principal que executa o sistema bancário.

## Funcionalidades

### Cliente

A classe `Cliente` representa um cliente do banco com os seguintes atributos:

- `nome`: Nome do cliente.
- `id`: ID único do cliente.
- `numeroTelefone`: Número de telefone do cliente.
- `endereco`: Endereço do cliente.
- `rendaMensal`: Renda mensal do cliente.

### Conta Corrente

A classe `ContaCorrente` implementa a interface `ContaInterface` e representa uma conta corrente com os seguintes atributos e métodos:

- `tipo`: Tipo da conta (CORRENTE).
- `numeroConta`: Número da conta, gerado automaticamente.
- `saldo`: Saldo da conta.
- `chequeEspecial`: Limite de cheque especial.
- `saldoTotal`: Saldo total incluindo o cheque especial.
- `cliente`: Cliente associado à conta.

Métodos:

- `depositar(valor: number)`: Realiza um depósito na conta.
- `sacar(valor: number)`: Realiza um saque da conta.
- `transferir(valor: number, contaDestino: ContaInterface)`: Realiza uma transferência para outra conta.

### Conta Poupança

A classe `ContaPoupanca` implementa a interface `ContaInterface` e representa uma conta poupança com os seguintes atributos e métodos:

- `tipo`: Tipo da conta (POUPANCA).
- `numeroConta`: Número da conta, gerado automaticamente.
- `saldo`: Saldo da conta.

Métodos:

- `depositar(valor: number)`: Realiza um depósito na conta.
- `sacar(valor: number)`: Realiza um saque da conta.
- `transferir(valor: number, contaDestino: ContaInterface)`: Realiza uma transferência para outra conta.

## Saída esperada

Dados do Cliente:
Nome: Samy
ID: 1
Número de Telefone: 81996018693
Endereço: Rua Deputado Hugo Mardini 12, Apto 401
Renda Mensal: 5000


Dados do Cliente:
Nome: Denis
ID: 2
Número de Telefone: 81996018693
Endereço: Rua Deputado Hugo Mardini 12, Apto 401 
Renda Mensal: 3000


Dados do Cliente:
Nome: Meyce
ID: 3
Número de Telefone: 81996018693
Endereço: Rua Pedro de Souza Leão, 100
Renda Mensal: 499


Dados do Cliente:
Nome: Isabela
ID: 4
Número de Telefone: 81996018693
Endereço: Rua Pedro de Souza Leão, 100
Renda Mensal: 499

======================================================================

Parabéns, Samy. Sua conta foi aberta com sucesso!

Parabéns, Denis. Sua conta foi aberta com sucesso!

Não foi possível abrir a conta, Meyce. Sua renda tem que ser a partir de 500 reais.

Número da conta da Samy: 342903870
Saldo total da conta da Samy: 0

Depósito realizado para a conta 342903870 - Samy.
Saldo atual: 500

Saldo com cheque especial incluso: 600

Saque de 100 realizado com sucesso.
Saldo atual: 400


 ===================================================

Saldo total da conta da Denis: 100 

Transferência realizada de 450 utilizando cheque especial.
Saldo atual: 0 e cheque especial: 50

Depósito realizado para a conta 360858649 - Denis.
Saldo atual: 550

Transferência de 450 realizada para a conta 360858649.

Saldo após transferência: 50

Saldo da conta destino após transferência: 550


 ===================================================

Número da conta: 467051549
Saldo total da conta: 100

Saldo após o depósito: 200

Saque de 50 realizado com sucesso.
Saldo atual: 150


Transferência realizada. Saldo atual: 50

Depósito realizado para a conta 342903870 - Samy.
Saldo atual: 100

Transferência de 100 realizada para a conta 342903870.

Saldo após transferência: 50

Saldo da conta destino após transferência: 150