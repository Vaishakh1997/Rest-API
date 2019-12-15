const pool=require("/home/vaishakh/rest/seedData.js")

async function getCustomers(){
  return await pool.query('SELECT * FROM customers ORDER BY customer_id')
}


async function getCustomersById(customer_id){
 // const id = parseInt(request.params.id)
  return await pool.query('SELECT * FROM customers WHERE customer_id = $1', [customer_id])
}


async function createCustomers(name, phone, email, city, pincode){
  return await pool.query('INSERT INTO customers(name, phone, email, city, pincode) VALUES ($1, $2, $3, $4, $5) returning *', 
  [name,phone,email,city,pincode])
}


async function updateCustomers(customer_id, name, email, phone, city, pincode){
 return await pool.query('UPDATE customers SET name = $1, email = $2, phone=$3, city=$4, pincode=$5 WHERE customer_id = $6 returning *',
 [name, email, phone, city, pincode, customer_id])
}


async function deleteCustomers(customer_id){
  return await pool.query('DELETE FROM customers WHERE customer_id = $1 returning *', [customer_id])
}


module.exports = {
  getCustomers,
  getCustomersById,
  createCustomers,
  updateCustomers,
  deleteCustomers
}