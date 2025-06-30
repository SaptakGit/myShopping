const Shape = require('../models/mongo/shapes')


const activeShapeList = async (req, res) => {
    try{
        const activeShape = await Shape.find({
            $and:[
                {isActive : true}
            ]
        })

        if(activeShape.length > 0){
            res.status(200).json({status:true, activeShape:activeShape})
        }else{
            res.status(200).json({status:false, activeShape:''})
        }
    }catch(err){
        res.status(400).json({message:err.message})
    }
}

module.exports = {
    activeShapeList
}