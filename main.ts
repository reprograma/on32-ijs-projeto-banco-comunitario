import { Cliente } from "./cliente/cliente";
import { ContaCorrente } from "./conta/conta-corrente";
import { ContaPoupanca } from "./conta/conta-poupanca";

const amicia = new Cliente(
    12345,
    "Amicia Santos",
    "000.000.000-01",
    "819000000001",
    1000.00,
    {
        numero: "1",
        bairro: "Bairro 1",
        cidade: "Cidade 1",
        cep: "50000-001",
        rua: "001",
        estado: "PE",
        complemento: "N/A"

    }
)

const melissa = new Cliente(
    6789,
    "Melissa Cavalcanti",
    "000.000.000-02",
    "81900000002",
    2000.00,
    {
        numero: "2",
        bairro: "Bairro 2",
        cidade: "Cidade 2",
        cep: "50000-002",
        rua: "002",
        estado: "PE",
        complemento: "N/A"

    }
)

const thalia = new Cliente(
    1245,
    "Thalia Cavalcanti",
    "000.000.000-03",
    "81900000003",
    2000.00,
    {
        numero: "3",
        bairro: "Bairro 3",
        cidade: "Cidade 3",
        cep: "50000-003",
        rua: "003",
        estado: "PE",
        complemento: "N/A"

    }
)

const amiciaContaCorrente = new ContaCorrente(amicia, 500);
const melissaContaCorrente = new ContaCorrente(melissa, 500);

amiciaContaCorrente.depositar(500);
amiciaContaCorrente.sacar(200);
amiciaContaCorrente.transferir(new ContaPoupanca(amicia), 200);

console.table(amiciaContaCorrente.transacoes)

melissaContaCorrente.depositar(500);
melissaContaCorrente.sacar(200);
melissaContaCorrente.transferir(new ContaPoupanca(melissa), 200);

console.table(melissaContaCorrente.transacoes)


melissaContaCorrente.transferir(amiciaContaCorrente, 100)

console.table(melissaContaCorrente.transacoes)

console.table(amiciaContaCorrente.transacoes)


new ContaCorrente(thalia, 499);
