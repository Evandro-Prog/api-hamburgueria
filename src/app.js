import express from 'express'
import routes from './routes'

import './database'; // Instancia a classe assim que a aplicação iniciar

class App {
    constructor() {
        this.app = express()
        this.middlewares()
        this.routes()
    }

    middlewares() {
        this.app.use(express.json())
    }

    routes() {
        this.app.use(routes)
    }
}



export default new App().app