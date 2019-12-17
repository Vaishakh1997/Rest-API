require('dotenv').config();
const jwt = require('jsonwebtoken');

function verifyToken(request, response, next){
     const token = request.header('auth-token');
     if(!token) response.status(401).send('Access Denied')
     try {
          const verified = jwt.verify(token,process.env.SECRET_TOKEN);
          if(verified) next();
     } 
     catch (error) {
         response.status(400).send('Invalid token');
     }
 }


module.exports= {verifyToken};