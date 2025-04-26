import jwt from 'jsonwebtoken'
import * as Yup from 'yup'
import authConfig from '../../config/auth'
import { emailOrPasswordIncorrect } from '../../Utils/errorResponses'
import User from '../models/User'


class SessionController {
    async store(request, response) {
        const schema = Yup.object({
            email: Yup.string().email().required(),
            password: Yup.string().min(6).required()
        })

        // Validate the request body using Yup
        const isValid = await schema.isValid(request.body)


        // Check if the request body is valid according to the schema
        if (!isValid) {
            return emailOrPasswordIncorrect(response)
        }

        const { email, password } = request.body

        const user = await User.findOne({ where: { email } })

        // Verify if the user exists in the database
        if (!user) {
            return emailOrPasswordIncorrect(response)
        }

        const isSamePassword = await user.checkPassword(password)

        // Check if the password is correct
        if (!isSamePassword) {
            return emailOrPasswordIncorrect(response)

        }


        return response.status(201).json({
            id: user.id,
            name: user.name,
            email: user.email,
            admin: user.admin,
            token: jwt.sign({ id: user.id, name: user.name }, authConfig.secret, {
                expiresIn: authConfig.expiresIn
            })
        })
    }
}

export default new SessionController()

// Login controller for handling user authentication.
