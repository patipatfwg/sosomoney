const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    NODE_ENV:process.env.NODE_ENV,
    SERVER_PORT:process.env.SERVER_PORT,
    DB_DIALECT:process.env.DB_DIALECT,
    DB_HOST:process.env.DB_HOST,
    DB_PORT:process.env.DB_PORT,
    DB_DATABASE:process.env.DB_DATABASE,
    DB_USERNAME:process.env.DB_USERNAME,
    DB_PASSSWORD:process.env.DB_PASSSWORD
}