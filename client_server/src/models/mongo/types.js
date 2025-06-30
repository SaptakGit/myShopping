const mongoose = require('mongoose')

const typeSchema = new mongoose.Schema(
    {
        typeName:{
            type: String,
            required: true,
        },
        isActive: {
            type: Boolean,
            required: true,
            default: 1
        }
    }
);

module.exports = mongoose.model('Type', typeSchema);