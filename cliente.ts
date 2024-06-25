import { ContaCorrente } from "./conta";
import { IConta } from "./interfaces/conta-bancaria.interface";
import { v4 as uuidv4 } from 'uuid';

export class Cliente implements Cliente {
    nomeCompleto: string;
    id: string;
    endereco: string;
    telefone: string;
    rendaSalarial: number;
    contas: IConta[] = [];
    
    constructor(nomeCompleto: string, endereco: string, telefone: string, rendaSalarial: number){
        this.nomeCompleto = nomeCompleto;
        this.id = uuidv4();
        this.endereco = endereco;
        this.telefone = telefone;
        this.rendaSalarial = rendaSalarial;
    }

    getInformacoes(){
        return {
            nomeCompleto: this.nomeCompleto,
            id: this.id,
            endereco: this.endereco,
            telefone: this.telefone,
            rendaSalarial: this.rendaSalarial,
            contas: this.contas.map(conta => ({
                tipoDeConta: conta.tipoDeConta,
                saldo: conta.saldo
            }))
        };
    }

    abrirConta(conta: IConta): string { 
        const rendaSalarialParaAberturaConta = 500;
        if (conta.tipoDeConta === "CONTA CORRENTE" && this.rendaSalarial <= rendaSalarialParaAberturaConta) {
            return `Não foi possível abrir uma conta corrente. Motivo: renda salarial menor que R$ ${rendaSalarialParaAberturaConta}.`;
        }
        this.contas.push(conta);
        return `Abertura de ${conta.tipoDeConta} realizada com sucesso para ${this.nomeCompleto}.`;
    }

    getContaCorrente(): ContaCorrente | undefined {
        return this.contas.find(conta => conta.tipoDeConta === "CONTA CORRENTE") as ContaCorrente;
    }

    depositarNaContaCorrente(valor: number): string {
        const conta = this.getContaCorrente();
        if (conta) {
            return conta.depositar(valor);
        } else {
            return "Cliente não possui conta corrente.";
        }
    }

    transferir(valor: number, contaDestino: IConta): string { 
        const contaCorrente = this.getContaCorrente();
        if (contaCorrente) {
            return contaCorrente.transferir(valor, contaDestino);
        } else {
            return "Cliente não possui conta corrente.";
        }
    }
}
