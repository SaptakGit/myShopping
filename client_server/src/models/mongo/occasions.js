const mongoose = require('mongoose')

const occasionSchema = new mongoose.Schema(
    {
        occasionName:{
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

module.exports = mongoose.model('Occasion', occasionSchema);