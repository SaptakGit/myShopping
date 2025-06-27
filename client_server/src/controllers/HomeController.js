const Category = require('../models/mongo/categories')
const Product = require('../models/mongo/products')


const categoryList = async (req, res) => {
    try{

        const categoryList = await Category.find({
            $and:[
                { isActive : 1}
            ]
        }).sort({_id: 1});

        if(categoryList.length > 0){
            res.status(200).json({status:true, categoryList:categoryList})
        }else{
            res.status(200).json({status:false, message: 'No Category Found'})
        }
    }
    catch(err){
        res.status(400).json({message:err.message})
    }
}

const homePorductList = async (req, res) => {
    try{
        const trendingProductList = await Product.find({
            $and:[
                { productStatus : true}
            ]
        }).sort({_id: 1});

        const newProductLlist = await Product.find({
            $and:[
                { productStatus : true}
            ]
        }).sort({_id : -1});

        if(trendingProductList.length >0 || newProductLlist.length > 0){
            res.status(200).json({status: true, trendingProductList:trendingProductList, newProductLlist:newProductLlist})
        }else{
            res.status(200).json({status: false, message:'No Product Found'})
        }
    }catch(err){
        res.status(400).json({message:err.message})
    }
}

module.exports = {
    categoryList,
    homePorductList
}