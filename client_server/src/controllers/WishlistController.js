const mongoose = require('mongoose');
const WishList = mongoose.model('Wishlist');


const addToWishlist = async (req, res) => {
    try{
        const { productId, userId } = req.body;

        const wishlist = new WishList({
            productId,
            userId
        });

        const saveData = await wishlist.save();

        if(saveData){
            res.status(200).json({status:true, message:'Item Added to Wishlist!', saveData:saveData});
        }else{
            res.status(200).json({status:false, message: 'Item adding to wishlist failed!'});
        }

    }catch(err){
        res.status(500).json({message: err.message})
    }
}

const removeFromWishlist = async (req, res) => {
    try{
        const { _id, productId, userId } = req.body;

        const remWishlist = await WishList.findOneAndDelete({productId: productId, userId: userId});

        if(remWishlist){
            res.status(200).json({status:true, message:'Item Removed from Wishlist!'});
        }else{
            res.status(200).json({status:false, message: 'Item removing from wishlist failed!'});
        }
    }catch(err){
        res.status(500).json({message: err.message});
    }
}

const getWishlist = async (req, res) => {
    try{
        const { userId } = req.query;

        const resWishlist = await WishList.find({userId : userId})
            .populate({path: 'productId', select: 'productName productPhoto productCode productPrice typeId',
                populate: {
                        path: 'typeId',
                        select: 'typeName'
                    }
            });

        if(resWishlist.length > 0){
            res.status(200).json({status:true, myWishlist: resWishlist});
        }else{
            res.status(200).json({status:true, myWishlist: []});
        }

    }catch(err){
         res.status(500).json({message: err.message});
    }
}

module.exports = {
    addToWishlist,
    removeFromWishlist,
    getWishlist
}