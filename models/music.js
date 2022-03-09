const sequelize = require('../config.db')
const {DataTypes} = require('sequelize')

const Music = sequelize.define('music', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING,},
    description: {type: DataTypes.STRING,},
})

module.exports = {
    Music,
}