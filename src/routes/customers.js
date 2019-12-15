const express = require('express')
const router = express.Router();
const db = require('../controllers/customers.js')
const middleware=require("../middleware/customers.js")


router.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

router.get('/customers', db.getCustomers)
router.get('/customers/:id', db.getCustomersById, middleware.errorHandle)
router.post('/customers', db.createCustomers)
router.put('/customers/:id', db.updateCustomers, middleware.errorHandle)
router.delete('/customers/:id', db.deleteCustomers, middleware.errorHandle)


module.exports=router;