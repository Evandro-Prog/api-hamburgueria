/* 
    * store -> cadastrar/ adicionar um novo usuário
    * index -> listar todos os usuários
    * show -> exibir um usuário 
    * update -> atualizar 
    * delete -> deletar 
*/
import { v4 } from 'uuid'; // Importing the uuid library to generate unique IDs
import * as Yup from 'yup'; // Importing Yup for schema validation
import User from '../models/User';



class UserController {

    async store(request, response) {

        const schema = Yup.object({
            name: Yup.string().required(),
            email: Yup.string().email().required(),
            password: Yup.string().min(6).required(),
            admin: Yup.boolean()
        })

        // Validation of the request body using Yup
        // The validateSync method is used to validate the request body against the defined schema
        try {
            schema.validateSync(request.body, { abortEarly: false })
        } catch (err) {
            return response
                .status(400)
                .json({ error: err.errors })
        }

        const { name, email, password, admin } = request.body

        // Verify if the user already exists in the database
        const userExists = await User.findOne({ where: { email } })

        if (userExists) {
            return response
                .status(400)
                .json({ error: 'User already exists' })
        }

        const user = await User.create({
            id: v4(),
            name,
            email,
            password,
            admin
        })

        return response.status(201).json({
            id: user.id,
            name: user.name,
            email: user.email,
            admin: user.admin
        })
    }
}

export default new UserController()