const Category = require('../models/mongo/categories')

const createCategory = async (req, res) =>{
   // console.log(req.body);
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
        //console.log(saveData)

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
        }*/);

        if(categoryList.length > 0){
            res.status(200).json({status:true, categoryList:categoryList, totalCategory:categoryList.length, limit:limit, offset:skip})
        }else{
            res.status(400).json({status:false, message: 'No Category Found'})
        }
    }
    catch(err){
        res.status(400).json({messahe:err.message})
    }
}

module.exports = {
    createCategory,
    getCategoryList
}