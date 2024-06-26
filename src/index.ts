import { ContaCorrente } from "./classes/ContaCorrente";
import { ContaPoupanca } from "./classes/ContaPoupanca";
import { Cliente } from "./interfaces/Cliente";

const dino: Cliente = {
  nome: "Dino da Silva Sauro",
  id: 1,
  endereco: "Alameda Pangea, 123",
  telefone: "(00) 99999-9999",
  renda: 3500,
};

const contaCorrenteDino = new ContaCorrente(dino);
contaCorrenteDino.depositar(1000);
contaCorrenteDino.sacar(500);

const fran: Cliente = {
  nome: "Fran da Silva Sauro",
  id: 2,
  endereco: "Alameda Pangea, 123",
  telefone: "(21) 88888-8888",
  renda: 1500,
};

const contaPoupancaFran = new ContaPoupanca(fran);
contaPoupancaFran.depositar(800);
contaPoupancaFran.transferir(contaCorrenteDino, 300);
