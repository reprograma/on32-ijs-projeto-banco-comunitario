import { NovaConta } from "../interfaces/NovaConta";

//Classe abstrata que representa uma conta bancária genérica
export abstract class Conta implements NovaConta {
/* nesse atributo Saldo atual da conta (protegido, ou seja,
só pode ser acessado dentro da própria classe e suas subclasses : mãe/filhas). */
    protected saldo: number= 0;

/* atributos dentro do constructor: numero: Número da conta.
cliente: Cliente associado à conta. Construtor: Inicializa uma conta com um número e um cliente.*/
    constructor(public numero: number, public cliente: Cliente) {}

// MÉTODOS
/*depositar(valor: number): Adiciona um valor ao saldo.
sacar(valor: number): Subtrai um valor do saldo se houver fundos suficientes.
transferir(valor: number, contaDestino: NovaConta): Transfere um valor para outra conta.
consultarSaldo(): Retorna o saldo atual da conta. */

depositar(valor: number): void { // adicionando valor no saldo
    this.saldo += valor; // verificando se o saldo é maior ou igual ao valor solicitado (valor)
    console.log(`Depositado: R$${valor}. Saldo atual: R$${this.saldo}`);
}

sacar(valor: number): void { // subtraindo um valor do saldo se houver fundos suficientes
// verifica se o valor da propriedade saldo do objeto atual (this.saldo) é maior ou igual
// ao valor solicitado (valor).
    if (this.saldo >= valor){
        this.saldo -= valor; // Ela subtrai o valor de valor do saldo atual (this.saldo).
        // abreviado de this.saldo = this.saldo - valor
        console.log(`Sacado: R$${valor}. Saldo atual: R$${this.saldo}`);
    } else {
            console.log(`Saldo insuficiente`)
        }
    }





}