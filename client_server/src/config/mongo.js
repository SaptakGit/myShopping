const mongoose = require('mongoose')
require('dotenv').config()


const connectMongo = async () => {
    try{
        await mongoose.connect(process.env.MONGO_CONNECTION_STRING);
        console.log('🟢 MongoDb Connected')
    }catch(err){
        console.error('🔴 MongoDb Connection Error', err)
        process.exit(1)
    }
}
require('../models/mongo');

module.exports = connectMongo;