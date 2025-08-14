const { DataTypes } = require('sequelize')
const sequelize = require('../../config/mysql')

const clientUser = sequelize.define('client_users', {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        phone:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        address:{
            type: DataTypes.TEXT,
            allowNull: false
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate:{
                isEmail: true
            }
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false
        },
        photo: {
            type: DataTypes.STRING,
            allowNull: true
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        gender: {
            type: DataTypes.ENUM('Male', 'Female', 'Other'),
            allowNull: true
        },
        status:{
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: 1
        }
    },{
        tableName: 'client_users',
        timestamps: true
    }
)


module.exports = clientUser