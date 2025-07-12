const express = require('express');
const router = express.Router();
const HomeController = require('../controllers/HomeController');


router.get('/shopbycategory', HomeController.categoryList);
router.get('/shopbybrad', HomeController.brandList);
router.get('/shopbyshape', HomeController.shapeList);
router.get('/shopbycarat', HomeController.caratList);
router.get('/shopbycolor', HomeController.colorList);
router.get('/shopbytype', HomeController.typeList);
router.get('/shopbyoccasion', HomeController.occasionList);
router.get('/shopbyproduct', HomeController.homePorductList);

module.exports = router
