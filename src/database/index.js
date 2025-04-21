import Sequelize from 'sequelize'

import User from '../app/models/User'

import configDatabase from '../config/database'

const models = [User]

class Database {
    constructor() {
        this.init()
    }

    init() {
        this.connection = new Sequelize(configDatabase) // Create a new Sequelize instance with the database configuration
        models.map(model => model.init(this.connection)) // Initialize each model with the database connection
    }

}

export default new Database()