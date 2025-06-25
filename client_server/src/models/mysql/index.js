const sequelize = require('../../config/mysql')

// Models
const adminUser = require("./adminUser")(sequelize)

// Asociations


module.exports = {
    adminUser
}