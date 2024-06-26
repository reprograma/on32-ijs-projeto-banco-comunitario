import { Conta } from './models/conta'
import { ContaCorrente } from './models/contaCorrente'
import { ServicoBancario } from './models/servicoBancario'
import { Cliente } from './models/cliente'


const banco = new ServicoBancario()

const cliente1 = new Cliente(
  'Elizabeth Mae Lzzy Hale',
  'Passagem Eni - Marambaia - Belém - PA',
  '(27) 3922-6047',
  3500
)

const cliente2 = new Cliente(
  'Simone Johanna Maria Simons',
  'R. Franscica Guimarães - Cobi de Cima - Vila Velha - ES',
  '(28) 2885-3427',
  5000
)

const cliente3 = new Cliente(
  'Tarja Soile Susanna Turunen',
  'Av. das Nações - Copacabana - Rio de Janeiro - RJ',
  '(21) 987654321',
  6000
)


banco.adicionarCliente(cliente1)
banco.adicionarCliente(cliente2)
banco.adicionarCliente(cliente3)

const contaCorrenteCliente1 = new ContaCorrente(
  cliente1.id,
  banco.gerarNumeroConta(),
  1200
)

const contaPoupancaCliente2 = new Conta(
  cliente2.id,
  banco.gerarNumeroConta()
)

const contaCorrenteCliente3 = new ContaCorrente(
  cliente3.id,
  banco.gerarNumeroConta(),
  3000
)

banco.adicionarConta(cliente1, contaCorrenteCliente1)
banco.adicionarConta(cliente2, contaPoupancaCliente2)
banco.adicionarConta(cliente3, contaCorrenteCliente3)

contaCorrenteCliente1.depositar(2500)
banco.efetuarTransferencia(contaCorrenteCliente1, contaPoupancaCliente2, 500)
banco.efetuarTransferencia(contaCorrenteCliente1, contaPoupancaCliente2, 700)

console.info('Saldo da conta:', contaCorrenteCliente1.saldo.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}))

const segundaContaCorrenteCliente1 = new ContaCorrente(
  cliente1.id,
  banco.gerarNumeroConta(),
  300
)

banco.adicionarConta(cliente1, segundaContaCorrenteCliente1)

banco.listarClientes()
