module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'api_hamburgueria',
    define: {
        timestamps: true, //registra a data de criação e atualização dos registros
        underscored: true, //utiliza o padrão snake_case
        underscoredAll: true, //utiliza o padrão snake_case para todas as colunas
    }
}

//Arquivo de configuração do banco de dados