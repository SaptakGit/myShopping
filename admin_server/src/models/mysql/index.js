const sequelize = require('../../config/mysql')

// Models
const adminUser = require("./adminUser")(sequelize);
const clientUser = require('./clientUser')(sequelize);

// Asociations


module.exports = {
    adminUser,
    clientUser
}