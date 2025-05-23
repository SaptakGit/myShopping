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

const getProductList = async (req, res) => {
    try{
        const page = parseInt(req.query.page) || 1;
        let limit = parseInt(req.query.limit) || 10;
        limit = limit > 50 ? 50 : limit;
        const skip = (page-1)*limit;
        const productList = await Product.find()
            .sort({_id: -1})
            .skip(skip)
            .limit(limit)
            .populate({path:'categoryId', select: 'categoryName'});

        const totalProduct = await Product.find();

        if(productList.length > 0){
            res.status(200).json({status:true, productList:productList, totalProductList: totalProduct.length, offset:limit})
        }else{
            res.status(200).json({status:false, message: 'No Category Found'})
        }

    }catch(err){
        res.status(500).json({message: 'Internal serve error', error: err})
    }
}

module.exports = {
    addProduct,
    getProductList
}