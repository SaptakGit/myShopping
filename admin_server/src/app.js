const express = require("express");
const app = express();
const cors = require('cors');
require('dotenv').config();
const path = require('path');
const auth = require('../src/middleware/authMiddleware');

const connectMongo = require('./config/mongo');

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
})); // whitelisting the frontend url
app.use(express.json()); // body parser
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));  // serve the uploads folder statically



// Routes
const authRouters = require('./routes/authRoute');
const categoryRoutes = require('./routes/categoryRoutes');
const productReoutes = require('./routes/productRoutes');
const brandRoutes = require('./routes/brandRoutes');
const colorRoutes = require('./routes/colorRoutes');
const occasionRoutes = require('./routes/occasionRoutes');
const shapeRoutes = require('./routes/shapeRoutes');
const typeRoutes = require('./routes/typeRoutes');
const userDataRoutes = require('./routes/userRoutes');


app.use('/admin/api', authRouters);
app.use('/admin/api', auth, categoryRoutes);
app.use('/admin/api', auth, productReoutes);
app.use('/admin/api', auth, brandRoutes);
app.use('/admin/api', auth, colorRoutes);
app.use('/admin/api', auth, occasionRoutes);
app.use('/admin/api', auth, shapeRoutes);
app.use('/admin/api', auth, typeRoutes);
app.use('/admin/api', auth, userDataRoutes);

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
