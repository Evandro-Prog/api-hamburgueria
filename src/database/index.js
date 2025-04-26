import mongoose from 'mongoose'
import Sequelize from 'sequelize'

import configDatabase from '../config/database'

import Category from '../app/models/Category'
import Product from '../app/models/Product'
import User from '../app/models/User'


const models = [User, Product, Category]

class Database {
    constructor() {
        this.init()
        this.mongo()
    }

    init() {
        this.connection = new Sequelize(configDatabase) // Create a new Sequelize instance with the database configuration
        models.map(model => model.init(this.connection))
            .map(model => model.associate && model.associate(this.connection.models))
        // Initialize each model with the database connection and set up associations if they exist
    }

    // MongoDB connection
    mongo() {
        this.mongoConnection = mongoose.connect('mongodb://localhost:27017/api_hamburgueria')
    }

}

export default new Database()

// This code initializes a Sequelize connection to a PostgreSQL database and sets up the User model with password hashing functionality. It uses the bcrypt library to hash passwords before saving them to the database. The models are defined in separate files and imported into this file for initialization. The configuration for the database connection is stored in a separate config file.
// The code also includes a class called Database that handles the initialization of the Sequelize connection and the models.
// The init method creates a new Sequelize instance with the database configuration and initializes each model with the connection.
// Finally, an instance of the Database class is exported for use in other parts of the application.