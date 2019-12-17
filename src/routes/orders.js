const express = require('express')
const router = express.Router();
const controllers = require('../controllers/orders.js')
const middleware=require("../middleware/customers.js")
const auth = require("../utils/tokenVerify")

router.get('/', (request, response) => response.json({ info: 'Node.js, Express, and Postgres API' }))

router.get('/orders', auth.verifyToken, controllers.getOrders)
router.get('/orders/:id', auth.verifyToken, controllers.getOrdersById, middleware.errorHandleOrderId)
router.post('/orders', auth.verifyToken, controllers.createOrders, middleware.errorHandleCustomerId)
router.put('/orders/:id', auth.verifyToken, controllers.updateOrders, middleware.errorHandleOrderId)
router.delete('/orders/:id', auth.verifyToken, controllers.deleteOrders, middleware.errorHandleOrderId)


module.exports=router;