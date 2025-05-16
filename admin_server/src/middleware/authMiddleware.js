const jwt = require('jsonwebtoken');

const authCheck = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1]

    if(!token){
        return res.status(401).json({message:'Unauthorise: No token Provided'})
    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_SERECT)
        req.user = decoded
        next()
    }catch(err){
        return res.status(401).json({message: 'Unauthorise: Invalid token'})
    }
}

module.exports = authCheck