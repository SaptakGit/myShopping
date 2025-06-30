const Occasion = require('../models/mongo/occasions')


const activeOccasionList = async (req, res) => {
    try{
        const activeOccasion = await Occasion.find({
            $and:[
                {isActive : true}
            ]
        })

        if(activeOccasion.length > 0){
            res.status(200).json({status:true, activeOccasion:activeOccasion})
        }else{
            res.status(200).json({status:false, activeOccasion:''})
        }
    }catch(err){
        res.status(400).json({message:err.message})
    }
}

module.exports = {
    activeOccasionList
}