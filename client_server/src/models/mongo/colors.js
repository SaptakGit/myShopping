const mongoose = require('mongoose')

const colorSchema = new mongoose.Schema(
    {
        colorName:{
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

module.exports = mongoose.model('Color', colorSchema);