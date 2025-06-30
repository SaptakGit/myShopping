const express = require('express')
const router = express.Router()
const TypeController = require('../controllers/TypeController')

router.get('/activetypelist', TypeController.activeTypeList)


module.exports = router