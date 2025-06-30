const Color = require('../models/mongo/colors')

const activeColorList = async (req, res) => {
    try{
        const activeColor = await Color.find({
            $and:[
                {isActive : true}
            ]
        })

        if(activeColor.length > 0){
            res.status(200).json({status:true, activeColor:activeColor})
        }else{
            res.status(200).json({status:false, activeColor:''})
        }
    }catch(err){
        res.status(400).json({message:err.message})
    }
}

module.exports = {
    activeColorList
}