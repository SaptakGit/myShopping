const express = require('express');
const router = express.Router();
const WishlistController = require('../controllers/WishlistController');

router.get('/mywishlist', WishlistController.getWishlist);
router.post('/addtowishlist', WishlistController.addToWishlist);
router.post('/removefromwishlist', WishlistController.removeFromWishlist);

module.exports = router;