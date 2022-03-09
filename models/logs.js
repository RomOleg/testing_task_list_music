const sequelize = require('../config.db')
const {DataTypes} = require('sequelize')

const Logs = sequelize.define('logs', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    api: {type: DataTypes.STRING,},
    domain: {type: DataTypes.STRING,},
    error: {type: DataTypes.STRING,},
})

module.exports = {
    Logs,
}