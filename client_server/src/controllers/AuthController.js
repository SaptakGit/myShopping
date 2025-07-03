const ClientUser = require('../models/mysql/clientUser')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const clientLogin = async (req, res) => {
    try{
        const {email, password } = req.body;

        const clientUser = await ClientUser.findOne({where: {email}})

        if(!clientUser){
            res.status(200).json({status:false, message:'Invalid Username'})
        }

        const isMatch = await bcrypt.compare(password, clientUser.password)

        if(!isMatch){
            res.status(200).json({status:false, message:'Invalid Password'})
        }

        const token = jwt.sign(
            { userId: clientUser.id, email: clientUser.email },
            process.env.JWT_SERECT,
            { expiresIn: '1d' }
        )

         res.status(200).json({status:true, message:'Login Successfull', token:token })

    }catch(err){
        res.status(500).json({message: err.message})
    }
}

const clientRegister = async (req, res) => {
    try{
        //console.log(req.body)
        const { userName, userPhone, userAddress, userEmail, userPassword } = req.body;

        //console.log(userEmail)

        // Check if user already exists
        const existingUser = await ClientUser.findOne({where: {email : userEmail} })

        if(existingUser){
            res.status(200).json({status:false, message:'User already exists with this email'})
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(userPassword, 10);

        // Save to DB
        const newUser = await ClientUser.create({
            name : userName, 
            phone : userPhone, 
            address : userAddress, 
            email : userEmail, 
            password : hashedPassword
        })

        if(newUser){

            const clientUser = await ClientUser.findOne({where: {email : userEmail}})

            const token = jwt.sign(
                { userId: clientUser.id, email: clientUser.email },
                process.env.JWT_SERECT,
                { expiresIn: '1d' }
            )

            res.status(200).json({status:true, message:'Registered Successfully', token:token})
        }else{
            res.status(200).json({status:false, message:'Registration Failed'})
        }

    }catch(err){
        res.status(500).json({message: err.message})
    }
}

module.exports = {
    clientLogin,
    clientRegister
}
