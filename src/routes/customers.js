const express = require('express')
const router = express.Router();
const controllers = require('../controllers/customers.js')
const middleware=require("../middleware/customers.js")

router.get('/', (request, response) => response.json({ info: 'Node.js, Express, and Postgres API' }))

router.get('/customers', controllers.getCustomers)
router.get('/customers/:id', controllers.getCustomersById, middleware.errorHandle)
router.post('/customers', controllers.createCustomers)
router.put('/customers/:id', controllers.updateCustomers, middleware.errorHandle)
router.delete('/customers/:id', controllers.deleteCustomers, middleware.errorHandle)

module.exports=router;