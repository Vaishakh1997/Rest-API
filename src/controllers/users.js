const db = require("../models/users");
const validate = require("../utils/validation.js")
const passwordHash = require('password-hash');
const jwt = require('jsonwebtoken');
require('dotenv').config()

const createUser=(request, response, next) =>{
     const valResultBody=validate.validateUsers(request.body)
     if(valResultBody.error)
          response.status(400).send(valResultBody.error.details[0].message)
     else{
          const {name,email,password} = request.body
          const hashedPassword = passwordHash.generate(password)
          db.validEmail(email)
               .then(data=>{
                    if(data.rows[0] === undefined)
                    {
                         db.createUser(name,email,hashedPassword)
                              .then(data=>response.status(200).json(`User ${data.rows[0].name} is registered Successfully...`))
                    }
                    else next()
               })
     }
}


const loginUser = (request, response, next) => {
     const {email,password} = request.body
     db.validEmail(email)
     .then(data=>{
          if(data.rows[0] != undefined)
          {
               if(passwordHash.verify(password, data.rows[0].password))
                    {
                         const token = jwt.sign({email: request.body.email}, process.env.SECRET_TOKEN)
                         response.header('auth-token', token).send(token)
                    //response.status(200).send("Welcome...login successfully Done...")
                    }
               else next()
          }
          else next()
     })
}


module.exports={createUser, loginUser}