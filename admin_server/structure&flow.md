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
    password
    is_active
    created
    updated
categories
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

