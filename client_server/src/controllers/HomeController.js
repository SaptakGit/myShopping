const mongoose = require('mongoose');
const Category = mongoose.model('Category');
const Brand = mongoose.model('Brand');
const Shape = mongoose.model('Shape');
const Color = mongoose.model('Color');
const Type = mongoose.model('Type');
const Occasion = mongoose.model('Occasion');
const Product = mongoose.model('Product');


/*const Category = require('../models/mongo/categories')
const Product = require('../models/mongo/products')*/


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

const brandList = async (req, res) => {
    try{

        const brandList = await Brand.find({
            $and:[
                { isActive : 1}
            ]
        }).sort({_id: 1});

        if(brandList.length > 0){
            res.status(200).json({status:true, brandList:brandList})
        }else{
            res.status(200).json({status:false, message: 'No Brand Found'})
        }
    }
    catch(err){
        res.status(400).json({message:err.message})
    }
}

const shapeList = async (req, res) => {
    try{

        const shapeList = await Shape.find({
            $and:[
                { isActive : 1}
            ]
        }).sort({_id: 1});

        if(shapeList.length > 0){
            res.status(200).json({status:true, shapeList:shapeList})
        }else{
            res.status(200).json({status:false, message: 'No Shapes Found'})
        }
    }
    catch(err){
        res.status(400).json({message:err.message})
    }
}

const caratList = async (req, res) => {
    try{

        const caratList = [];

        for(let i = 1; i <= 25; i++){
            caratList.push(i);
        }

        if(caratList.length > 0){
            res.status(200).json({status:true, caratList:caratList})
        }else{
            res.status(200).json({status:false, message: 'No Carats Found'})
        }
    }
    catch(err){
        res.status(400).json({message:err.message})
    }
}

const colorList = async (req, res) => {
    try{

        const colorList = await Color.find({
            $and:[
                { isActive : 1}
            ]
        }).sort({_id: 1});

        if(colorList.length > 0){
            res.status(200).json({status:true, colorList:colorList})
        }else{
            res.status(200).json({status:false, message: 'No Colors Found'})
        }
    }
    catch(err){
        res.status(400).json({message:err.message})
    }
}

const typeList = async (req, res) => {
    try{

        const typeList = await Type.find({
            $and:[
                { isActive : 1}
            ]
        }).sort({_id: 1});

        if(typeList.length > 0){
            res.status(200).json({status:true, typeList:typeList})
        }else{
            res.status(200).json({status:false, message: 'No Type Found'})
        }
    }
    catch(err){
        res.status(400).json({message:err.message})
    }
}

const occasionList = async (req, res) => {
    try{

        const occasionList = await Occasion.find({
            $and:[
                { isActive : 1}
            ]
        }).sort({_id: 1});

        if(occasionList.length > 0){
            res.status(200).json({status:true, occasionList:occasionList})
        }else{
            res.status(200).json({status:false, message: 'No Occasion Found'})
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
    brandList,
    shapeList,
    caratList,
    colorList,
    typeList,
    occasionList,
    homePorductList
}