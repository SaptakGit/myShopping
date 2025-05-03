const sequelize = require('../../config/mysql')

// Models
const AdminUser = require('./AdminUser')(sequelize)

// Asociations


module.exports = {
    AdminUser
}