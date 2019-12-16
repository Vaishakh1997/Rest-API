const express = require('express')
const router = express.Router();
const controllers = require('../controllers/orders.js')
const middleware=require("../middleware/customers.js")


router.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

router.get('/orders', controllers.getOrders)
router.get('/orders/:id', controllers.getOrdersById, middleware.errorHandleOrderId)
router.post('/orders', controllers.createOrders, middleware.errorHandleCustomerId)
router.put('/orders/:id', controllers.updateOrders, middleware.errorHandleOrderId)
router.delete('/orders/:id', controllers.deleteOrders, middleware.errorHandleOrderId)


module.exports=router;