export function validaNomeCompleto (nomeCompleto:string): boolean {
    return nomeCompleto.trim().split(' ').length > 1;
    }