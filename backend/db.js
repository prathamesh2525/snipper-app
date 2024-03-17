const { Sequelize } = require("sequelize")

const sequelize = new Sequelize(
  "if0_36181564_my_mysql",
  "if0_36181564",
  "HeFYazG2O3zN",
  {
    host: "sql202.infinityfree.com",
    dialect: "mysql",
  }
)

module.exports = sequelize
