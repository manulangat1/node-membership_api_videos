const  dotenv = require('dotenv');
dotenv.config()
const dbConfig = {
  development: {
    username: process.env.USERNAME,
    password: "3050manu",
    database: "nod_video",
    host: "127.0.0.1",
    dialect: "postgres"
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "postgres"
  },
  production: {
    use_env_variable: "DATABASE_URL",
    dialect: "postgres"
  }
}

module.exports = dbConfig;