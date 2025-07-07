const mongoose = require('mongoose');
const Product = mongoose.model('Product');

const productList = async (req, res) => {
    try{
        const { category } = req.query;

        const filters = [
            { productStatus: true }
        ];

        if(category){
            filters.push({ categoryId: category });
        }

        const resProdList = await Product.find({ $and : filters }).sort({ _id : -1 });

        if(resProdList.length > 0){
            res.status(200).json({status:true, productList:resProdList})
        }else{
            res.status(200).json({status:false, message: 'No Product Found'})
        }
    }
    catch(err){
        res.status(400).json({message:err.message})
    }
}


const productDetail = async (req, res) => {
    try{
        const { productId } = req.query

        //console.log(productId)

        const filters = [
            { _id: productId },
            { productStatus: true }
        ]

        const prodDetail = await Product.findOne({ $and : filters })
            .populate({path: 'categoryId', select: 'categoryName'})
            .populate({path: 'shapeId', select: 'shapeName'})
            .populate({path: 'brandId', select: 'brandName'})
            .populate({path: 'colorId', select: 'colorName'})
            .populate({path: 'typeId', select: 'typeName'})
            .populate({path: 'occasionId', select: 'occasionName'});

        if(prodDetail){
            res.status(200).json({status:true, productDetail:prodDetail})
        }else{
            res.status(200).json({status:false, message: 'No Product Found'})
        }

    }catch(err){
        res.status(400).json({message: err.message})
    }
}

module.exports = {
    productList,
    productDetail
}