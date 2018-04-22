const Sequelize = require("sequelize");

module.exports = {
  "development": {
    "username": "root",
    "password": "adm123",
    "database": "webapp",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "operatorsAliases": Sequelize.Op
  },
  "test": {
    "username": "root",
    "password": "adm123",
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "operatorsAliases": Sequelize.Op
  },
  "production": {
    "username": "root",
    "password": "adm123",
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "operatorsAliases": Sequelize.Op
  }
}
