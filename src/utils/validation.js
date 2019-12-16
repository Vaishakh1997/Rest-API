const Joi=require('joi')


function validateId(id)
{
     const schema ={
          id: Joi.number().positive().integer().required()}
      return Joi.validate({'id':id},schema)
}


function validateBody(body)
{
     const schema = {
          name: Joi.string().min(5).max(18).required(),
          phone: Joi.number().integer().min(10).precision(10).required(),
          email: Joi.string().email().required(),
          city: Joi.string().min(5).max(18).required(),
          pincode: Joi.number().integer().min(6).precision(9).required(),
      };
      return Joi.validate(body,schema)
}

function validateBodyOrders(body)
{
     const schema = {
          customer_id: Joi.number().positive().integer().required(),
          order_status: Joi.string().required(),
          order_type: Joi.string().required(),
          amount: Joi.number().integer().required(),
      };
      return Joi.validate(body,schema)
}


function validateUsers(body)
{
     const schema = {
          name: Joi.string().min(5).max(18).required(),
          email: Joi.string().email().required(),
          password: Joi.string().min(3).max(15).required()
      };
      return Joi.validate(body,schema)
}

module.exports = {
     validateId,
     validateBody,
     validateBodyOrders,
     validateUsers
}