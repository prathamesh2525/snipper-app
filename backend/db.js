const { Sequelize } = require("sequelize")

const sequelize = new Sequelize("mysql", "root", "password", {
  host: "localhost",
  dialect: "mysql",
})

module.exports = sequelize
