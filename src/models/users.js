const pool=require("/home/vaishakh/rest/seedData.js")


async function createUser(name, email, password){
  return await pool.query('INSERT INTO users(name, email, password) VALUES ($1, $2, $3) returning *', 
    [name,email,password])
  }

async function validEmail(email){
    return await pool.query('SELECT * FROM users WHERE  email= $1 ',[email] )
  }


  module.exports={createUser,validEmail}