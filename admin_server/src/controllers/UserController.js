const ClientUser = require('../models/mysql/clientUser');


const getUserList = async (req, res) => {
    try{
        //console.log(req);
        const page = parseInt(req.query.page) || 1;
        let limit = parseInt(req.query.limit) || 10;
        limit = limit > 50 ? 50 : limit;
        const skip = (page-1)*limit;

        const userList = await ClientUser.findAll({
                        order: [['id', 'DESC']],
                        offset: skip,
                        limit: limit
                    });

        const totalUser = await ClientUser.findAll();

        if(userList.length > 0){
            res.status(200).json({status:true, userListData: userList, totalUserData:totalUser.length, offset:limit,  message:'User data found'});
        }else{
            res.status(200).json({status:200, userListData:[], message: 'No user Found'});
        }
    }catch(err){
        res.status(500).json({message:err.message});
    }
}

module.exports = {
    getUserList
}