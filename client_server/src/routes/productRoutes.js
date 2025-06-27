const express = require('express')
const router = express.Router()
const ProductController = require('../controllers/ProductController')
/*const uploadProductImg = require('../middleware/uploadProductPhoto')

router.post('/addproduct', uploadProductImg.single('productPhoto'), ProductController.addProduct)
router.get('/productlist', ProductController.getProductList) 
router.patch('/changeprodstatus', ProductController.changeProdStatus)
router.delete('/deleteproduct', ProductController.deleteProduct)*/

router.get('/productlist', ProductController.productList)

module.exports = router