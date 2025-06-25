const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema(
    {
        categoryName:{
            type: String,
            required: true,
        },
        categoryPhoto: {
            type: String,
            required: true
        },
        isActive: {
            type: Boolean,
            required: true,
            default: 1
        }
    },{
        timestamps: true
    }
);

module.exports = mongoose.model('Category', categorySchema);