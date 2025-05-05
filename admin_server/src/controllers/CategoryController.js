const Category = require('../models/mongo/categories')

const createCategory = async (req, res) =>{
    console.log(req.body);
    try{
        const { categoryName, categoryPhoto, isActive } = req.body
        if(!categoryName || !categoryPhoto){
            return res.status(400).json({message: 'Category Name & Photo is Required'})
        }

        const category = new Category({
            categoryName, 
            categoryPhoto,
            isActive : isActive ?? true
        })

        const saveData = await category.save()
        console.log(saveData)

        return res.status(200).json({message: 'Category Created'})
    } catch(err){
        console.error(err)
    }
}

module.exports = {
    createCategory
}