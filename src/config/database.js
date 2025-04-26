module.exports = {
    //Database configuration
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'api_hamburgueria',
    define: {
        timestamps: true, //Registers createdAt and updatedAt
        underscored: true, //Uses snake_case for column names
        underscoredAll: true, //Uses snake_case for all column names
    }
}

