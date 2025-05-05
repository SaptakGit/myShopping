const { DataTypes } = require('sequelize')
const sequelize = require('../../config/mysql')

const adminUser = sequelize.define('admin_users', {
            id:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name:{
                type: DataTypes.STRING,
                allowNull: false
            },
            email:{
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
                validate: {
                    isEmail:true
                }
            },
            password:{
                type: DataTypes.STRING,
                allowNull: false
            },
            role:{
                type: DataTypes.INTEGER,
                allowNull: false,
                dafaultValue: 1
            }
        },
        {
            tableName: 'admin_users',
            timestamps: true,
        }
    )


module.exports = adminUser

