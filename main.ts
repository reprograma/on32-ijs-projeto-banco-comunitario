import { ContaCorrente } from "./contas/corrente";
import { ContaPoupanca } from "./contas/poupanca";
import { Cliente } from "./contas/clientes";

const cliente01 = new Cliente (101, "João Silva", "21999999999", 3000, "Rua Avenida Brasil, 456, Jardim América, Rio de Janeiro, RJ, 29000-000", "CORRENTE")
console.log(cliente01)

const cliente02 = new Cliente (202, "Maria Oliveira", "1688888888", 5000, "Rua Avenida Paulista - 789 - Pinheiros - São Paulo - SP - 27050-200", "POUPANCA")
console.log(cliente02)

const contaCliente01 = new ContaCorrente(cliente01, 2500)
console.log(contaCliente01)

const contaCliente02 = new ContaPoupanca(cliente02, 5000)
console.log(contaCliente01)

contaCliente01.sacar(300)
contaCliente01.depositar(6000)
contaCliente02.depositar(1000)


