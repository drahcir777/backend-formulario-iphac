interface ICreateUserDTO {
    cpf: string
    nome: string
    sobrenome: string
    email: string
    telefone: string
    empresa?: string
    matricula?: string
    senha: string,
    city?: string
    inicio_contrato?: string
    fim_contrato?: string
}

export { ICreateUserDTO }