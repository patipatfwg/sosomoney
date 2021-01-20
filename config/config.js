const config = require('./index');

module.exports = {
    "development": {
        "username": config.DB_USERNAME,
        "password": config.DB_PASSSWORD,
        "database": config.DB_DATABASE,
        "host": config.DB_HOST,
        "dialect": config.DB_DIALECT
    },
    "heroku": {
        "username": config.DB_USERNAME_HEROKU,
        "password": config.DB_PASSSWORD_HEROKU,
        "database": config.DB_DATABASE_HEROKU,
        "host": config.DB_HOST_HEROKU,
        "dialect": config.DB_DIALECT
    }
}