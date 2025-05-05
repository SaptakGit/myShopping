const express = require("express")
const app = express()
require('dotenv').config()

const connectMongo = require('./config/mongo')

app.use(express.json()) // body parser

// Routes
const categoryRoutes = require('./routes/categoryRoutes')

app.use('/admin/api', categoryRoutes)

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
