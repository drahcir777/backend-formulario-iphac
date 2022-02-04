import { Request, Response, Router } from "express";
import { CreateUserController } from "../modules/users/useCases/createUsers/createUserController";

const router = Router()

const createUserController = new CreateUserController()


router.get("/", (req: Request, res: Response) => {
    return res.send("hello world")
})


router.post("/user", createUserController.handle)

export { router }