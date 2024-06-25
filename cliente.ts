import * as readline from 'readline';
import * as crypto from 'crypto';
import { Conta, novaConta, menuContas} from './conta';

export const clientesDoBanco: Cliente[] = [];

export class Cliente {
  private id: string;
  private nome: string;
  private endereco: {rua: string, numero: string, bairro: string, cidade: string, cep: string, estado: string};
  private telefone: string;
  protected contasAssociadas: Conta[] = [];
  public rendaSalarial: number; // rendaSalarial é publica para poder ser acessado por conta.ts
 
  constructor(nome: string, endereco: {rua: string, numero: string, bairro: string, cidade: string, cep: string, estado: string}, telefone: string, contasAssociadas: Conta[] = [], rendaSalarial: number){
    this.nome = nome;
    this.id = crypto.randomUUID(); // Gerar um ID aleatório;
    this.endereco = endereco;
    this.telefone = telefone;
    this.contasAssociadas = contasAssociadas;
    this.rendaSalarial = rendaSalarial;
  }
  
  getId(): string {
    return this.id;
  }

  adicionarConta(conta: Conta): void {
    this.contasAssociadas.push(conta);
  }

  getContasAssociadas(): Conta[] {
    return this.contasAssociadas;
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

export function novoCliente() {
  rl.question('Nome: ', (nome) => {
    rl.question('Rua: ', (rua) => {
      rl.question('Número: ', (numero) => {
        rl.question('Bairro: ', (bairro) => {
          rl.question('Cidade: ', (cidade) => {
            rl.question('CEP: ', (cep) => {
              rl.question('Estado: ', (estado) => {
                rl.question('Telefone: ', (telefone) => {
                  rl.question('Renda salarial: ', (rendaSalarial) => {
                    const endereco = { rua, numero, bairro, cidade, cep, estado };
                    const cliente = new Cliente(nome, endereco, telefone, [], Number(rendaSalarial));
                    clientesDoBanco.push(cliente);
                    console.log('Cliente cadastrado com sucesso! ID:', cliente.getId());
                    console.log('Parabéns, agora você fez o cadastro inicial! Deseja abrir uma conta?');
                    rl.question('1 - Sim\n2 - Não\n', (resposta) => {
                      if (resposta === '1') {
                        novaConta(cliente);
                      } else {
                        console.log('Até logo!');
                        rl.close();
                      }
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  });
}

export function conferirCliente() {
    rl.question('Digite o ID do cliente: ', (id) => {
      const cliente = clientesDoBanco.find(c => c.getId() === id);
      if (cliente) {
        console.log('Acesso permitido!');
        console.log('Contas associadas:', cliente.getContasAssociadas());
        menuContas(cliente);
      } else {
        console.log('Cliente não encontrado!');
      }
    });
  }