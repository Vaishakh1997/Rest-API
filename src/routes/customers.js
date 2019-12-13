const express = require('express')
const router = express.Router();
const db = require('../controllers/customers.js')

router.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

router.get('/customers', db.getCustomers)
router.get('/customers/:id', db.getCustomersById)
router.post('/customers', db.createCustomers)
router.put('/customers/:id', db.updateCustomers)
router.delete('/customers/:id', db.deleteCustomers)


module.exports=router;