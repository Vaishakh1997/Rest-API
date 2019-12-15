const express = require('express')
const router1 = express.Router();
const db = require('../controllers/orders.js')
const middleware=require("../middleware/customers.js")


router1.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

router1.get('/orders', db.getOrders)
router1.get('/orders/:id', db.getOrdersById, middleware.errorHandle)
router1.post('/orders', db.createOrders)
router1.put('/orders/:id', db.updateOrders, middleware.errorHandle)
router1.delete('/orders/:id', db.deleteOrders, middleware.errorHandle)


module.exports=router1;