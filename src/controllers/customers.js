const db = require("../models/customers.js");
const validate = require("../utils/validation.js")

const getCustomers = (request, response, next) => {
     db.getCustomers()
          .then(data => { response.json(data.rows)})
          .catch(err => next(err));
};


const getCustomersById = (request, response, next) => {
     const customer_id = parseInt(request.params.id)
     if(validate.validateId(request.params.id).error)
          response.status(400).send('Invalid ID...Enter correct details')
     else{
     db.getCustomersById(customer_id)
          .then(data => { response.json(data.rows)})
          .catch(err => next(err));
     }
};


const createCustomers=(request, response, next) =>{
     const {name,phone,email,city,pincode} = request.body
     db.createCustomers(name,phone,email,city,pincode)
          .then(data=>response.json(`Customer ${data.rows[0].name} is Added Successfully...`))
          .catch(err => next(err));
}


const updateCustomers=(request, response, next) =>{
     const customer_id = parseInt(request.params.id)
     const { name, email, phone, city, pincode } = request.body
     db.updateCustomers(customer_id, name, email,phone,city,pincode)
          .then(data=>response.json(`Customer ${data.rows[0].name} Updated Successfully...`))
          .catch(err => next(err))
}


const deleteCustomers=(request, response, next) =>{
     const customer_id = parseInt(request.params.id)
     db.deleteCustomers(customer_id)
    .then(data=>response.json(`Customer ${data.rows[0].name} is Deleted`))
    .catch(err => next(err))
}


module.exports = {
     getCustomers,
     getCustomersById,
     createCustomers,
     updateCustomers,
     deleteCustomers
};
