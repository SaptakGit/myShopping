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
        shapeId:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Shape',
            required: true,
        },
        caratSize:{
            type: Number,
            required: true,
        },
        productWeight:{
            type: Number,
            required: true,
        },
        brandId:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Brand',
            required: true,
        },
        colorId:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Color',
            required: true,
        },
        typeId:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Type',
            required: true,
        },
        occasionId:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Occasion',
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
        productCode:{
            type: String,
            required: false,
        },
        productStatus: {
            type: Boolean,
            required: true
        }
    },{
        timestamps: true
    }
)


module.exports = mongoose.model('Product', productSchema)