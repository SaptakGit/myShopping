const AdminUser = require('../models/mysql/adminUser')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const adminLogin = async (req, res) => {
    try{
        const {email, password} = req.body;
        //console.log(email+' '+password)
        const adminUser = await AdminUser.findOne({where:{email}});

        if(!adminUser){
            return res.status(401).json({message:"Invalid Username"})
        }
          
        const isMatch = await bcrypt.compare(password, adminUser.password)

        if(!isMatch){
            return res.status(401).json({message:"Invalid Password"})
        }

        const token = jwt.sign(
            { userId: adminUser.id, email: adminUser.email, tole: adminUser.role },
            process.env.JWT_SERECT,
            { expiresIn: '1d' }
        )

        res.status(200).json({message:'Login Successfull',token:token })
    }catch(err){
        res.status(500).json({message:err.message})
    }
}


module.exports = {
    adminLogin
}