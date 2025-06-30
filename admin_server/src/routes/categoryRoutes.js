const express = require('express')
const router = express.Router()
const CategoryController = require('../controllers/CategoryController')
const uploadCatImg = require('../middleware/uploadCategoryPhoto')



router.post('/category', uploadCatImg.single('categoryPhoto'), CategoryController.createCategory)
router.get('/categorylist', CategoryController.getCategoryList)
router.get('/activecatlist', CategoryController.activeCategoryList)
router.patch('/changestatus', CategoryController.changeStatus)
router.delete('/deletecategory', CategoryController.deleteCategory)

module.exports = router
