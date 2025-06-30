const Type = require('../models/mongo/types')


const activeTypeList = async (req, res) => {
    try{
        const activeType = await Type.find({
            $and:[
                {isActive : true}
            ]
        })

        if(activeType.length > 0){
            res.status(200).json({status:true, activeType:activeType})
        }else{
            res.status(200).json({status:false, activeType:''})
        }
    }catch(err){
        res.status(400).json({message:err.message})
    }
}

module.exports = {
    activeTypeList
}