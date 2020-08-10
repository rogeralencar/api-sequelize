const Sequelize = require('sequelize')
const db = require('../config/database')
const Studies = require('../models/Studies')

const conn = new Sequelize(db)

Studies.init(conn)

module.exports = conn