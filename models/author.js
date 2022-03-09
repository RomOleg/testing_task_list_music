const sequelize = require('../config.db')
const {DataTypes} = require('sequelize')
const { Music } = require('./music')

const Author = sequelize.define('author', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
})

Author.hasMany(Music)
Music.belongsTo(Author)

module.exports = {
    Author,
}