const Product = require('../models/mongo/products')
const fs = require('fs');
const generateCode = require('../helper/productCodeGenerator')


const addProduct = async (req, res) => {
    try{
        const uniqueProductCode = generateCode(10);
        //console.log(uniqueProductCode);
        //console.log(req.body)
        const { productName, categoryId, shapeId, caratSize, productWeight, brandId, colorId, typeId, occasionId, productPrice, offerPrice, productQuantity, productStatus } = req.body;

        const productPhoto = req.file.path.replace(/\\/g, '/')
        

        if(!productName || !req.file){
            return res.status(400).json({messae: 'Product name and Photo is required'})
        }
            const product = new Product({
                productName, 
                productPhoto,
                categoryId,
                shapeId, 
                caratSize, 
                productWeight,
                brandId, 
                colorId, 
                typeId, 
                occasionId,  
                productPrice, 
                offerPrice, 
                productQuantity,
                productCode : uniqueProductCode, 
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
            .populate({path: 'categoryId', select: 'categoryName'})
            .populate({path: 'shapeId', select: 'shapeName'})
            .populate({path: 'brandId', select: 'brandName'})
            .populate({path: 'colorId', select: 'colorName'})
            .populate({path: 'typeId', select: 'typeName'})
            .populate({path: 'occasionId', select: 'occasionName'});

        const totalProduct = await Product.find();

        if(productList.length > 0){
            res.status(200).json({status:true, productList:productList, totalProductList: totalProduct.length, offset:limit})
        }else{
            res.status(200).json({status:false, productList: [], message: 'No Category Found'})
        }

    }catch(err){
        res.status(500).json({message: 'Internal serve error', error: err})
    }
}

const changeProdStatus = async (req, res) => {
    try{
        //console.log(req.body)
        const id = req.body.prodId
        const prodStatus = req.body.prodStatus

        let setStatus = prodStatus === false ? true : false;

        const resUpdStatus = await Product.findByIdAndUpdate(
            id,
            {$set : {productStatus :setStatus}},
            {new : true}
        )

        if (!resUpdStatus) {
            return res.status(404).json({ message: 'Product not found' });
        }

        //console.log('Updated:', resUpdStatus);
        res.status(200).json({ message: 'Procudct status updated', product: resUpdStatus });
    }catch(err){
        console.error(err)
    }
}

const deleteProduct = async (req, res) => {
    //console.log(req.body)
    try{
        const { id } = req.body;

        const productDetail = await Product.findById(id);

        const imagePath = productDetail.productPhoto;

        const resDelProduct = await Product.findByIdAndDelete(id);

        fs.unlink(imagePath, (err) => {
            if (err) {
                console.error(`Error deleting image file: ${err}`);
                // You might want to log this error but still send a success response
                // if the database deletion was successful.
            } else {
                console.log(`Image deleted from folder.`);
            }
        });

        if(!resDelProduct){
            return res.status(404).json({message:"Product not found"})
        }

        return res.status(200).json({message: "Product Deleted"})
    }
    catch(err){
        return res.status(500).json({message:"Internal Server Error"})
    }
}

module.exports = {
    addProduct,
    getProductList,
    changeProdStatus,
    deleteProduct
}