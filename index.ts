import * as readline from "readline";
import { novoCliente, conferirCliente } from "./cliente";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  export function menuInicial(){
    rl.question(`"
      ╔═════════════════════════════════════════╗
      ║    Bem-vindo ao banco Comunitário MJ!   ║
      ╠═════════════════════════════════════════╣
      ╠══════════ Já é nosso cliente? ══════════╣
      ║    1 - Sim, quero acessar minha conta   ║
      ║    2 - Não, quero abrir uma conta       ║
      ║    3 - Sair                             ║
      ╚═════════════════════════════════════════╝
      Escolha uma opção: `, (resposta) => {
      
        switch(resposta){
          case '1':
            conferirCliente();
            break;
            case '2':
            novoCliente();
            break;
          case '3':
            console.log("Até logo!");
            rl.close();
            break;
          default:
            console.log("Opção inválida!");
            menuInicial();
        }
  }
    )}

menuInicial();
