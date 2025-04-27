import express from 'express';
import routes from './routes';

import './database'; // Import the database configuration and models
import { resolve } from 'node:path';
// Import the database configuration and models to establish a connection to the database

class App {
    constructor() {
        this.app = express()
        this.middlewares()
        this.routes()
    }

    middlewares() {
        this.app.use(express.json())
        this.app.use('/product-file',
            express.static(resolve(__dirname, '..', 'uploads'))) //
        this.app.use('/category-file',
            express.static(resolve(__dirname, '..', 'uploads'))) // Serve static files from the uploads directory   
    }

    routes() {
        this.app.use(routes)
    }
}



export default new App().app

// File that initializes the Express application and sets up middleware and routes.
// It imports the necessary modules, including the Express framework and the routes defined in a separate file.