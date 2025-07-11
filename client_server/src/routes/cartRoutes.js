const express = require('express');
const router = express.Router();
const CartController = require('../controllers/CartController');

router.get('/mycart', CartController.fetchCart);
router.post('/addtocart', CartController.addToCart);
router.post('/removefromcart', CartController.removeFromCart);

module.exports = router;