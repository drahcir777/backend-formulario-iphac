import { Request, Response } from "express";
import { CreateUserUseCase } from "./createUserUseCase";



class CreateUserController {

    async handle(req: Request, res: Response) {
        const { cpf, email, nome, senha, sobrenome, city, empresa, matricula, telefone, inicio_contrato, fim_contrato } = req.body

        console.log(cpf, email, nome, senha, sobrenome, telefone)

        const createUserUseCase = new CreateUserUseCase()

        const result = await createUserUseCase.execute({
            cpf,
            email,
            nome,
            senha,
            sobrenome,
            telefone,
            city,
            empresa,
            matricula,
            inicio_contrato,
            fim_contrato
        })

        return res.json(result)
    }

}

export { CreateUserController }