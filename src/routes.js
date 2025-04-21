import { Router } from 'express'
import { v4 as uuidv4 } from 'uuid'

import User from './app/models/User'

const routes = Router()

routes.get('/', async (req, res) => {
    const user = await User.create({
        id: uuidv4(),
        name: 'Evandro2',
        email: 'evandro2@email.com',
        password_hash: '123456',
    })

    return res.status(201).json(user)
})

export default routes