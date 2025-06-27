const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
const path = require('path');
//const auth = require('../src/middleware/authMiddleware')

const connectMongo = require('./config/mongo')

app.use(cors({
    origin: "http://localhost:5174",
    credentials: true,
})); // whitelisting the frontend url
app.use(express.json()) // body parser
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));  // serve the uploads folder statically
app.use(express.urlencoded({ extended: true })); // optional for form data


// Routes
const homeRouters = require('./routes/homeRoutes')
const productRouters = require('./routes/productRoutes')

app.use('/client/api', homeRouters)
app.use('/client/api', productRouters)

connectMongo()
        .then(() => {
            console.log('Database Connection Established....')
            app.listen(process.env.PORT, () =>{
                console.log('server is runnig on port '+process.env.PORT)
            })
        })
        .catch(() => {
            console.error('Database connot be connected!!!')
        })