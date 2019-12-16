const express = require('express')
const router = express.Router();
const controllers = require('../controllers/users')
const middleware=require("../middleware/customers.js")

router.post('/register', controllers.createUser, middleware.errorHandleEmail)
router.post('/login', controllers.loginUser, middleware.errorHandleEmailAndPassword)


module.exports=router;