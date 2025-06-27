const Product = require('../models/mongo/products')

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

module.exports = {
    productList
}