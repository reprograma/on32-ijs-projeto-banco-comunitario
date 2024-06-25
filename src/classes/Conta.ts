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

depositar(valor: number): void {
    this.saldo += valor;
    console.log(`Depositado: R$${valor}. Saldo atual: R$${this.saldo}`);
}

sacar(valor: number): void {
    if 
}




}