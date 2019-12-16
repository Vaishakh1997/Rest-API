const db = require("../models/orders");
const dbcustomers = require("../models/customers")
const validate = require("../utils/validation.js")


const getOrders = (request, response, next) => {
     db.getOrders()
          .then(data => { response.json(data.rows)})
          .catch(err => next(err));
};



const getOrdersById = (request, response, next) => {
     const valResultId=validate.validateId(request.params.id)
     if(valResultId.error)
          response.status(400).send(valResultId.error.details[0].message)
     else{
          const order_id = parseInt(request.params.id)
          db.getOrdersById(order_id)
               .then(data => {
                    if(data.rows[0] !=undefined)
                         response.json(data.rows)
                    else 
                         next()
               })
     }        
}



const createOrders=(request, response, next) =>{
     const valResultBody=validate.validateBodyOrders(request.body)
     if(valResultBody.error)
          response.status(400).send(valResultBody.error.details[0].message)
     else{
          const {customer_id, order_status, order_type, amount} = request.body
          dbcustomers.getCustomersById(customer_id)
               .then(data => {
                    if(data.rows[0] !=undefined){
                         db.createOrders(customer_id, order_status, order_type, amount)
                              .then(data => response.json(`Order ${data.rows[0].order_id} is Added Successfully...`))
                              .catch(err => next(err));
                    }
                    else next()
               }) 
     }
}



const updateOrders=(request, response, next) =>{
     const valResultId=validate.validateId(request.params.id)
     if(valResultId.error)
          response.status(400).send(valResultId.error.details[0].message)
     else{
          const valResultBody=validate.validateBodyOrders(request.body)
          if(valResultBody.error)
               response.status(400).send(valResultBody.error.details[0].message)
          else{
               const order_id = parseInt(request.params.id)
               const { customer_id, order_status, order_type, amount } = request.body
               db.updateOrders(order_id, customer_id, order_status, order_type, amount)
                    .then(data=>{
                         if(data.rows[0] !=undefined)
                         response.json(`Order ${data.rows[0].order_id} with ${data.rows[0].customer_id} Updated Successfully...`)
                         else next();
                    })
          }
     }  
}



const deleteOrders=(request, response, next) =>{
     const valResultId=validate.validateId(request.params.id)
     if(valResultId.error)
          response.status(400).send(valResultId.error.details[0].message)
     else{
          const order_id = parseInt(request.params.id)
          db.deleteOrders(order_id)
          .then(data=>{
               if(data.rows[0] !=undefined)
               response.json(`Order ${data.rows[0].order_id} with ID ${data.rows[0].customer_id} deleted Successfully...`)
               else next()
          })
     }
}




module.exports = {
     getOrders,
     getOrdersById,
     createOrders,
     updateOrders,
     deleteOrders
};
