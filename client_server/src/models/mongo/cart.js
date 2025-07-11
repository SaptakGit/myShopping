const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema(
    {
        productId:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            required: true
        },
        itemQuantity:{
            type: Number,
            required: true
        },
        userId:{
            type: Number,
            required: true
        }
    },{
        timestamps: true
    }
)

module.exports = mongoose.model('Cart', cartSchema)