const moodle_client = require("moodle-client");
import { ICreateUserDTO } from "./DTOS/ICreateUserDTO";



class CreateUserUseCase {

    async execute({ cpf, email, nome, senha, city, empresa, matricula, sobrenome, telefone, inicio_contrato, fim_contrato }: ICreateUserDTO) {


        const user = moodle_client.init({
            wwwroot: process.env.URL_MOODLE,
            token: process.env.TOKEN_MOODLE
        }).then(function (client: any) {
            return client.call({
                wsfunction: "core_user_create_users",
                method: "POST",
                args: {
                    users: [
                        {
                            username: cpf,
                            password: senha,
                            firstname: nome,
                            lastname: sobrenome,
                            email,
                            phone1: telefone,
                            city,
                            customfields: [
                                {
                                    type: "empresa",
                                    value: empresa
                                },
                                {
                                    type: "matricula",
                                    value: matricula
                                },
                                {
                                    type: "ini_contrato",
                                    value: inicio_contrato
                                },
                                {
                                    type: "fim_contrato",
                                    value: fim_contrato
                                }

                            ]

                        }
                    ]
                }
            })

        }).catch(function (err: any) {
            console.log("Unable to initialize the client: " + err);
        });


        return user
    }


}

export { CreateUserUseCase }