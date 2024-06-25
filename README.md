# Projeto Banco Comunitário - MACIBANK


## Este é um projeto de implementação básica de um banco comunitário em TypeScript. O projeto inclui funcionalidades como abertura de contas correntes/poupança para clientes, depósitos, transferências entre contas, e verificação de saldo mínimo para abertura de conta corrente.

# Funcionalidades Implementadas

* Cliente: Representa um cliente do banco com informações básicas como nome, endereço, telefone e renda salarial.
* Conta: Interface que define operações básicas de contas bancárias.
* ContaCorrente: Implementação da interface Conta para contas correntes, incluindo métodos para depósito e transferência.
* ContaPoupanca: Implementação da interface Conta para contas poupança, incluindo método para depósito.
* Transferência: Funcionalidade para transferir valores entre contas correntes.

# Estrutura do Projeto

* cliente.ts: Definição da classe Cliente, com métodos para abrir conta, depositar na conta corrente, transferir valores, e     obter informações do cliente.
* conta.ts: Implementações das classes ContaCorrente e ContaPoupanca, cada uma implementando a interface IConta com métodos específicos.
* interfaces/conta-bancaria.interface.ts: Interface IConta que define os métodos esperados para todas as contas bancárias.
* main.ts: Arquivo principal que demonstra o uso das classes e funcionalidades implementadas.


# Contribuições
## Contribuições são bem-vindas! Sinta-se à vontade para apontar o que acha que posso melhorar ;)