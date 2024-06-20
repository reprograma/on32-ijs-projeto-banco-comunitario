export interface Usuario {
    nome: string;
    id: number;
    endereco: string;
    contato: void; //criar classe celular/telefone p tipar o contato, epecificando o número de caracteres, exigencia de ddd, '9' adicional, etc
    renda: number;
    poupanca: void; //criar classe contaPoupanca e usar para tipar este atributo
    corrente?: void; //criar classe contaCorrente e usar para tipar este atributo
}