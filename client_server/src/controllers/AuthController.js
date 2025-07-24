const mongoose = require('mongoose');
const ClientUser = require('../models/mysql/clientUser');
const WishList = mongoose.model('Wishlist');
const Cart = mongoose.model('Cart');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const clientLogin = async (req, res) => {
    try{
        const { userEmail, userPassword } = req.body;
        const clientUser = await ClientUser.findOne({where: {email : userEmail}});
        if(!clientUser){
            res.status(200).json({status:false, message:'Invalid Username'});
        }
        const isMatch = await bcrypt.compare(userPassword, clientUser.password);
        if(!isMatch){
            res.status(200).json({status:false, message:'Invalid Password'});
        }
        const token = jwt.sign(
            { userId: clientUser.id, email: clientUser.email },
            process.env.JWT_SERECT,
            { expiresIn: '1d' }
        );
        const myWishList = await WishList.find({userId: clientUser.id});
        const myCart = await Cart.find({userId: clientUser.id})
            .populate({
                path: 'productId',
                select: 'productName productPhoto productPrice productCode typeId ',
                populate: {
                    path: 'typeId',
                    select: 'typeName'
                }
            });
         res.status(200).json({status:true, message:'Login Successfull', token:token, user: clientUser, myWishList: myWishList, myCart: myCart });
    }catch(err){
        res.status(500).json({message: err.message});
    }
}


const clientRegister = async (req, res) => {
    try{
        const { userName, userPhone, userAddress, userEmail, userPassword } = req.body;
        const existingUser = await ClientUser.findOne({where: {email : userEmail} });
        if(existingUser){
            res.status(200).json({status:false, message:'User already exists with this email'});
        }
        const hashedPassword = await bcrypt.hash(userPassword, 10);
        const newUser = await ClientUser.create({
            name : userName, 
            phone : userPhone, 
            address : userAddress, 
            email : userEmail, 
            password : hashedPassword
        });
        if(newUser){
            const clientUser = await ClientUser.findOne({where: {email : userEmail}});
            const token = jwt.sign(
                { userId: clientUser.id, email: clientUser.email },
                process.env.JWT_SERECT,
                { expiresIn: '1d' }
            );
            res.status(200).json({status:true, message:'Registered Successfully', token:token, user: clientUser, myWishList: [], myCart: []});
        }else{
            res.status(200).json({status:false, message:'Registration Failed'});
        }
    }catch(err){
        res.status(500).json({message: err.message});
    }
}


const clientAuth = async (req, res) => {
    try{
        const { token } = req.body;
        if(!token){
            res.status(401).json({status:false, message:'Token not found'});
        }
        const decodeObj = jwt.verify(token, process.env.JWT_SERECT);
        const { userId } = decodeObj;
        const user = await ClientUser.findOne({where: userId});
        if(!user){
            res.status(401).json({status:false, message:'User not found'});
        } else{
            const myWishList = await WishList.find({userId: user.id});
            const myCart = await Cart.find({userId: user.id})
                .populate({
                    path: 'productId',
                    select: 'productName productPhoto productPrice productCode typeId ',
                    populate: {
                        path: 'typeId',
                        select: 'typeName'
                    }
                });
            res.status(200).json({status:true, message:'user verified', user:user, myWishList: myWishList, myCart: myCart});
        }
    }catch(err){
        res.status(500).json({message: err.message});
    }
}

const clientUpdateProfile = async (req, res) => {
    try{
        const { userId, userName, userPhone, userAge, userGender, userAddress } = req.body;

        const userPhoto = req.file.path.replace(/\\/g, '/');
   
        const saveData = ClientUser.update(
            {
                name: userName,
                phone: userPhone,
                age: userAge,
                gender: userGender,
                address: userAddress,
                photo: userPhoto
            }, 
            {
                where: { id: userId }
            }
        ).then(() => {
            // Handle the success
            return res.status(201).json({status: true, message: 'User updated successfully!'});
            }).catch(err => {
            // Handle the error
            return res.status(200).json({status: false, message: 'Error updating user'});
            });
        
    }catch(err){
        res.status(500).json({message: err.message});
    }
}
module.exports = {
    clientLogin,
    clientRegister,
    clientAuth,
    clientUpdateProfile
}
