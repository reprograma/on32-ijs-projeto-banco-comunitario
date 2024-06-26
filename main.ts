import { Cliente } from "./cliente/cliente";
import { Conta } from "./conta/conta";
import { ContaTipoEnum } from "./enums/conta-tipo.enum";

const cliente1 = new Cliente(
    "Martineli",
    123,
    "Rua Silvana",
    "03144444444",
    700,
)

const cliente2 = new Cliente(
    "Bruna",
    126,
    "Rua Bahia",
    "03134256708",
    400
)

const conta1 = new Conta(
    ContaTipoEnum.POUPANCA,
    500
)

conta1.depositar(400);
conta1.sacar(200);

cliente1.detalhes();
cliente2.detalhes();

