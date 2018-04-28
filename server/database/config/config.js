const Sequelize = require("sequelize");

module.exports = {
  "development": {
    "username": "postgres",
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
    "use_env_variable": "DATABASE_URL",
    "dialect": "postgres",
    "protocol": "postgres",
    "operatorsAliases": Sequelize.Op,
    "dialectOptions": {
      "ssl": true
    }
  }
}
