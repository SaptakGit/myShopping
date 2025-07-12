const mongoose = require('mongoose');
const Cart = mongoose.model('Cart');
const Product = mongoose.model('Product');

const addToCart = async (req, res) => {
    try{
        const { productId, itemQuantity, userId } = req.body;

        const itemInCart = await Cart.find({productId:productId, userId: userId});

        const prodDetail = await Product.find({_id: productId}).populate({path: 'typeId', select: 'typeName'});

        //console.log(prodDetail[0].productCode)

        //if(itemInCart){
            if(itemInCart.length > 0){
                const newQty = itemInCart[0].itemQuantity + 1;

                //console.log(itemInCart[0].itemQuantity)

                const updCart = await Cart.findByIdAndUpdate(
                    itemInCart[0]._id,
                    { $set: { itemQuantity: newQty } },
                    { new: true }
                );

                if(updCart){
                    res.status(200).json({status:true, message:'Item Added to the Cart', cartItem: {_id: itemInCart[0]._id, productId:productId, itemQuantity:newQty, userId: userId, productCode: prodDetail[0].productCode, productType: prodDetail[0].typeId.typeName, productPhoto: prodDetail[0].productPhoto, productPrice: prodDetail[0].productPrice, productName: prodDetail[0].productName}});
                }else{
                    res.status(200).json({status:false, message:'Item Not Added'});
                }
            } else{
                const addItem = new Cart({
                    productId,
                    itemQuantity,
                    userId
                });

                const saveCart = await addItem.save();
                const insertedId = saveCart._id;

                if(saveCart){
                    res.status(200).json({status:true, message:'Item Added to the Cart', cartItem: {_id: insertedId, productId:productId, itemQuantity:itemQuantity, userId: userId, productCode: prodDetail[0].productCode, productType: prodDetail[0].typeId.typeName, productPhoto: prodDetail[0].productPhoto, productPrice: prodDetail[0].productPrice, productName: prodDetail[0].productName}});
                }else{
                    res.status(200).json({status:false, message:'Item Not Added'});
                }
            }
        //}

    }catch(err){
        res.status(500).json({message: err.message});
    }
}

const removeFromCart = async (req, res) => {
    try{
        const { _id } = req.body;

        const itemInCart = await Cart.find({_id});

        if(itemInCart){
            if(itemInCart.itemQuantity >1){
                const newQty = itemInCart.itemQuantity - 1;

                const updCart = await Cart.findByIdAndUpdate(
                    id,
                    { $set: { itemQuantity: newQty } },
                    { new: true }
                )
            } else{
                const delFrmCart = await Cart.findByIdAndDelete(_id);
            }
            res.status(200).json({status:true, message:'Item Removed From Cart'});
        }else{
            res.status(200).json({status:false, message:'Item Not Found'});
        }
    }catch(err){
        res.status(500).json({message: err.message});
    }
}


const fetchCart = async (req, res) => {
    try{
        const { userId } = req.query;

        const resCart = await Cart.find({userId : userId})
            .populate({path: 'productId', select: 'productName productPhoto productPrice productCode caratSize'});

        if(resCart.length > 0){
            res.status(200).json({status:true, myCart: resCart});
        }else{
            res.status(200).json({status:true, myCart: []});
        }

    } catch(err){
        res.status(500).json({message: err.message});
    }
}


module.exports = {
    addToCart,
    removeFromCart,
    fetchCart
}
