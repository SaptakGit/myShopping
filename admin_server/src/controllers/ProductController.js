const Product = require('../models/mongo/products')


const addProduct = async (req, res) => {
    try{
        //console.log(req.body)
        const { productName, categoryId, productPrice, offerPrice, productQuantity, productNew, productTrending, productStatus } = req.body;

        const productPhoto = req.file.path.replace(/\\/g, '/')

        if(!productName || !req.file){
            return res.status(400).json({messae: 'Product name and Photo is required'})
        }
            const product = new Product({
                productName, 
                productPhoto,
                categoryId, 
                productPrice, 
                offerPrice, 
                productQuantity, 
                productNew, 
                productTrending, 
                productStatus 
            })

            const saveData = await product.save();

            return res.status(201).json({message: 'Product Added'})

        }catch(err){
            res.status(500).json({message: 'Internal server error', error:err})
        }
}

const getProductList = (req, res) => {
    console.log('product') 
    try{
        console.log('Product List')
    }catch(err){
        res.status(500).json({message: 'Internal serve error', error: err})
    }
}

module.exports = {
    addProduct,
    getProductList
}