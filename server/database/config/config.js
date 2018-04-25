const Sequelize = require("sequelize");

module.exports = {
  "development": {
    "username": "webapp",
    "password": "adm123",
    "database": "webapp",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "operatorsAliases": Sequelize.Op
  },
  "test": {
    "username": "webapp_test",
    "password": "webapp_test",
    "database": "webapp_test",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "operatorsAliases": Sequelize.Op
  },
  "production": {
    "username": "webapp",
    "password": "adm123",
    "database": "webapp",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "operatorsAliases": Sequelize.Op
  }
}
