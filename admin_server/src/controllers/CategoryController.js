const Category = require('../models/mongo/categories')

const createCategory = async (req, res) =>{
    try{
        const { categoryName, isActive } = req.body
        if(!categoryName || !req.file){
            return res.status(400).json({message: 'Category Name & Photo is Required'})
        }

        const categoryPhoto = req.file.path.replace(/\\/g, '/'); // normalize path on Windows

        const category = new Category({
            categoryName, 
            categoryPhoto,
            isActive : isActive ?? true
        })

        const saveData = await category.save()

        return res.status(201).json({message: 'Category Created'})
    } catch(err){
        console.error('Error saving category:', err);
        res.status(500).json({ message: 'Internal server error' });
    }
}

const getCategoryList = async (req, res) => {
    try{
        const page = parseInt(req.query.page) || 1;
        let limit = parseInt(req.query.limit) || 10;
        limit = limit > 50 ? 50 : limit;
        const skip = (page - 1)*limit

        const categoryList = await Category.find(/*{
            $and:[
                { isActive : 1}
            ]
        }*/).sort({_id: -1}).skip(skip).limit(limit);

        const totalCategoryList = await Category.find();

        if(categoryList.length > 0){
            res.status(200).json({status:true, categoryList:categoryList, totalCategory:totalCategoryList.length, limit:limit, offset:skip})
        }else{
            res.status(200).json({status:false, message: 'No Category Found'})
        }
    }
    catch(err){
        res.status(400).json({message:err.message})
    }
}

const activeCategoryList = async (req, res) => {
    try{
        const activeCategory = await Category.find({
            $and:[
                {isActive : true}
            ]
        })

        if(activeCategory.length > 0){
            res.status(200).json({status:true, activeCategory:activeCategory})
        }else{
            res.status(200).json({status:false, activeCategory:''})
        }
    }catch(err){
        res.status(400).json({message:err.message})
    }
}

const changeStatus = async (req, res) => {
    try{
        //console.log(req.body)
        const id = req.body.catId
        const catStatus = req.body.catStatus

        let setStatus = catStatus === false ? true : false;

         const resUpdStatus = await Category.findByIdAndUpdate(
            id,
            {$set : {isActive :setStatus}},
            {new : true}
        )

        if (!resUpdStatus) {
            return res.status(404).json({ message: 'Category not found' });
        }

        //console.log('Updated:', resUpdStatus);
        res.status(200).json({ message: 'Category status updated', category: resUpdStatus });
    }catch(err){
        console.error(err)
    }
}

const deleteCategory = async (req, res) => {
    try{
        const { id } = req.body;

        const resDeleteStatus = await Category.findByIdAndDelete(id);

        if(!resDeleteStatus) {
            return res.status(404).json({message: "Category not found"})
        }

        return res.status(200).json({message: "Category Deleted"})
    }catch(err){
        return res.status(500).json({message:"Internal Server Error"})
    }
}

module.exports = {
    createCategory,
    getCategoryList,
    activeCategoryList,
    changeStatus,
    deleteCategory
}
