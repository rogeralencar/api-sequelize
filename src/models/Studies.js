const { Model, DataTypes } = require('sequelize')

class Studies extends Model {
    static init(sequelize) {
        super.init({
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
            },
            nameStudy: DataTypes.STRING(25),
            descStudy: DataTypes.STRING(50),
        }, {
            sequelize
        })
    }
}

module.exports = Studies