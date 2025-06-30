const mongoose = require('mongoose')

const brandSchema = new mongoose.Schema(
    {
        brandName:{
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

module.exports = mongoose.model('Brand', brandSchema);