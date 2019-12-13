const Joi=require('joi')

function validateId(id)
{
     var ob={};
     ob['id']=id;
     const schema = {
          id: Joi.number().integer().less(50)
      }
      return Joi.validate(ob,schema)
}

function validatePost()
{
     var ob={};
     ob['id']=id;
     const schema = {
          id: Joi.number().integer().less(50)
      }
      return Joi.validate(ob,schema)
}


module.exports = {
     validateId,
     validatePost
}