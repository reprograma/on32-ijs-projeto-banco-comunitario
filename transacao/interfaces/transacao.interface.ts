import { TransacaoTipoEnum } from "../enum/transacao-tipo.enum";

export interface TransacaoInterface {
    data: Date,
    tipoTransacao: TransacaoTipoEnum,
    valor: number,
    descricao: string
}