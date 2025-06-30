const mongoose = require('mongoose')

const shapeSchema = new mongoose.Schema(
    {
        shapeName:{
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

module.exports = mongoose.model('Shape', shapeSchema);