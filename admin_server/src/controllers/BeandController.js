const Brand = require('../models/mongo/brands')

const activeBrandList = async (req, res) => {
    try{
        const activeBrand = await Brand.find({
            $and:[
                {isActive : true}
            ]
        })

        if(activeBrand.length > 0){
            res.status(200).json({status:true, activeBrand:activeBrand})
        }else{
            res.status(200).json({status:false, activeBrand:''})
        }
    }catch(err){
        res.status(400).json({message:err.message})
    }
}

module.exports = {
    activeBrandList
}
