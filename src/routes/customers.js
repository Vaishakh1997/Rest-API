const express = require('express')
const router = express.Router();
const controllers = require('../controllers/customers.js')
const middleware=require("../middleware/customers.js")
const auth=require("../utils/tokenVerify")

router.get('/', (request, response) => response.json({ info: 'Node.js, Express, and Postgres API' }))

router.get('/customers', auth.verifyToken, controllers.getCustomers)
router.get('/customers/:id', auth.verifyToken, controllers.getCustomersById, middleware.errorHandle)
router.post('/customers', auth.verifyToken, controllers.createCustomers)
router.put('/customers/:id', auth.verifyToken, controllers.updateCustomers, middleware.errorHandle)
router.delete('/customers/:id', auth.verifyToken, controllers.deleteCustomers, middleware.errorHandle)

module.exports=router;