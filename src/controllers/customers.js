const db = require("../models/customers.js");
const validate = require("../utils/validation.js")


const getCustomers = (request, response, next) => {
     db.getCustomers()
          .then(data => { response.status(200).json(data.rows)})
          .catch(err => next(err));
};



const getCustomersById = (request, response, next) => {
     const valResultId=validate.validateId(request.params.id)
     if(valResultId.error)
          response.status(400).send(valResultId.error.details[0].message)
     else{
          const customer_id = parseInt(request.params.id)
          db.getCustomersById(customer_id)
               .then(data => {
                    if(data.rows[0] !=undefined)
                         response.status(200).json(data.rows)
                    else 
                         next()
               })
     }        
}



const createCustomers=(request, response, next) =>{
     const valResultBody=validate.validateBody(request.body)
     if(valResultBody.error)
          response.status(400).send(valResultBody.error.details[0].message)
     else{
          const {name,phone,email,city,pincode} = request.body
          db.createCustomers(name,phone,email,city,pincode)
               .then(data=>response.status(200).json(`Customer ${data.rows[0].name} is Added Successfully...`))
               .catch(err => next(err));
     }
}



const updateCustomers=(request, response, next) =>{
     const valResultId=validate.validateId(request.params.id)
     if(valResultId.error)
          response.status(400).send(valResultId.error.details[0].message)
     else{
          const valResultBody=validate.validateBody(request.body)
          if(valResultBody.error)
               response.status(400).send(valResultBody.error.details[0].message)
          else{
               const customer_id = parseInt(request.params.id)
               const { name, email, phone, city, pincode } = request.body
               db.updateCustomers(customer_id, name, email,phone,city,pincode)
                    .then(data=>{
                         if(data.rows[0] !=undefined)
                         response.status(200).json(`Customer ${data.rows[0].name} with ${data.rows[0].customer_id} Updated Successfully...`)
                         else next()
                    })
          }
     }  
}



const deleteCustomers=(request, response, next) =>{
     const valResultId=validate.validateId(request.params.id)
     if(valResultId.error)
          response.status(400).send(valResultId.error.details[0].message)
     else{
          const customer_id = parseInt(request.params.id)
          db.deleteCustomers(customer_id)
          .then(data=>{
               if(data.rows[0] !=undefined)
               response.status(200).json(`Customer ${data.rows[0].name} with ID ${data.rows[0].customer_id} deleted Successfully...`)
               else next()
          })
     }
}




module.exports = {
     getCustomers,
     getCustomersById,
     createCustomers,
     updateCustomers,
     deleteCustomers
};
