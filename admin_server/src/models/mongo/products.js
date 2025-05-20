const mongoose = require('mongoose')

const productSchema = new mongoose.Schema(
    {
        productName:{
            type: String,
            required: true
        },
        productPhoto:{
            type: String,
            reuired: true
        },
        categoryId:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Category',
            required: true,
        },
        productPrice:{
            type: Number,
            required: true
        },
        offerPrice:{
            type: Number,
            required: true
        },
        productQuantity:{
            type: Number,
            required: true,
        },
        productNew:{
            type: Boolean,
            required: false,
            default: false
        },
        productTrending:{
            type: Boolean,
            required: false,
            default: false
        },
        productStatus: {
            type: Boolean,
            required: true
        }
    }
)


module.exports = mongoose.model('Product', productSchema)