import { Cliente } from "./cliente";
import { ContaCorrente } from "./contaCorrente";
import { ContaPoupanca } from "./contaPoupanca";
import { ContaTipoEnum } from "../Enums/contaTipo.enum";

export class CadastraContas {
    private contas: Array<ContaCorrente | ContaPoupanca> = [];

    abrirConta(cliente: Cliente, tipoConta: ContaTipoEnum, saldo: number): void {
        if (tipoConta === ContaTipoEnum.CORRENTE && cliente.rendaMensal >= 500) {
            const contaCorrente = new ContaCorrente(saldo);
            this.contas.push(contaCorrente);
            console.log(`Conta ${ContaTipoEnum.CORRENTE} ${contaCorrente.numeroConta} aberta para o cliente ${cliente.nome}. \n`);
        } else if (tipoConta === ContaTipoEnum.POUPANCA) {
            const contaPoupanca = new ContaPoupanca(saldo);
            this.contas.push(contaPoupanca);
            console.log(`Conta ${ContaTipoEnum.POUPANCA} ${contaPoupanca.numeroConta} aberta para o cliente ${cliente.nome}. \n`);
        } else {
            console.log(`Não foi possível abrir a conta. Sua renda tem que ser a partir de 500 reais. \n`);
        }
    }

    listarContas(): void {
        this.contas.forEach((conta, index) => {
            if (conta instanceof ContaCorrente) {
                console.log(`Conta ${index + 1}: Tipo: ${ContaTipoEnum.CORRENTE}, Número: ${conta.numeroConta}, Saldo: ${conta.saldo}, Cheque Especial: ${conta.chequeEspecial} \n`);
            } else if (conta instanceof ContaPoupanca) {
                console.log(`Conta ${index + 1}: Tipo: ${ContaTipoEnum.POUPANCA}, Número: ${conta.numeroConta}, Saldo: ${conta.saldo} \n`);
            }
        });
    }
}