const { Sequelize, DataTypes } = require("sequelize")
const sequelize = require("../db")

const Submission = sequelize.define("Submission", {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  codeLanguage: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  codeSnippet: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  stdin: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  timestamp: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
  },
})

module.exports = Submission
