adminuser (mySql)
    name
    email
    password
    role
    created
    updated
user
    name
    email
    phone
    password
    gender
    age
    image
    is_active
    created
    updated
categories (mongoDb)
    name
    img
    is_active
    created
    updated
products
    name
    category_id
    price
    offer_price
    quantity
    is_active
    is_trending
    new_arrival
    offer_id
    created
    updated
product_img
    product_id
    image
    is_active
    created
    updated
cart
offer
order
wishlist

create app.js
npm install express mongoose sequelize mysql2 dotenv
npm install --save-dev nodemon
In Package.JSON
    "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
    }

in cmd
    npm start
    npm run dev

for migration
    npm install --save-dev sequelize-cli
    npx sequelize-cli init

    
    project/
        ├── config/
        │   └── config.json
        ├── migrations/
        ├── models/
        ├── seeders/
        └── .sequelizerc (optional)

    If you're using .env, modify config/config.json like this or use a custom config.js file:

        require('dotenv').config();
        module.exports = {
        development: {
            username: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASSWORD,
            database: process.env.MYSQL_DB,
            host: process.env.MYSQL_HOST,
            dialect: 'mysql'
        }
        };

    Create .sequelizerc file and add
        const path = require('path');

        module.exports = {
            'config': path.resolve('config', 'config.js'),
            'models-path': path.resolve('src/models/mysql'),
            'seeders-path': path.resolve('seeders'),
            'migrations-path': path.resolve('migrations')
        };


    npx sequelize-cli migration:generate --name create-user-table

    Open the migration file and Update:

    npx sequelize-cli db:migrate

for file upload 
    we will use multer (middleware for handling multipart/form-data)

    npm install multer

    project/
    ├── uploads/             ← Uploaded images stored here
    │   └── categories/

for CORS 
    npm install cors


For Auth
    npm install jsonwebtoken bcryptjs






project/
│
├── .env
├── .sequelizerc                  # Tells Sequelize CLI where to find stuff
│
├── config/                       # For Sequelize CLI config
│   └── config.js                 # DB config (MySQL)
│
├── migrations/                   # Sequelize migrations
│   └── xxxx-create-user.js
│
├── seeders/                      # Sequelize seeders
│   └── xxxx-seed-users.js
│
├── model/                        # Sequelize initializer
│   └── index.js                  # Loads models from src/models/mysql
│
├── src/
│   ├── config/
│   │   ├── mongo.js              # Mongoose connection logic
│   │   └── mysql.js              # Optional Sequelize config (used programmatically)
│   │
│   ├── models/
│   │   ├── mongo/
│   │   │   ├── Categories.js
│   │   │   └── Products.js
│   │   │
│   │   └── mysql/
│   │       ├── AdminUser.js
│   │       └── index.js          # Optional: Sequelize model loader from this folder
│   │
│   ├── routes/                   # Express routes (optional)
│   │   └── ...
│   │
│   └── app.js                    # Main app entry point
│
└── package.json





