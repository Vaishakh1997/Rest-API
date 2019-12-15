const pool=require("/home/vaishakh/rest/seedData.js")

async function getOrders(){
  return await pool.query('SELECT * FROM orders')
}


async function getOrdersById(order_id){
 // const id = parseInt(request.params.id)
  return await pool.query('SELECT * FROM orders WHERE order_id = $1', [order_id])
}


async function createOrders(customer_id, order_status, order_type, amount){
  return await pool.query('INSERT INTO orders(customer_id, order_status, order_type, amount) VALUES ($1, $2, $3, $4) returning *', 
  [customer_id, order_status, order_type, amount])
}


async function updateOrders(order_id, customer_id, order_status, order_type, amount){
 return await pool.query('UPDATE orders SET customer_id = $1, order_status = $2, order_type=$3, amount = $4 WHERE order_id = $5 returning *',
 [customer_id, order_status, order_type, amount, order_id])
}


async function deleteOrders(order_id){
  return await pool.query('DELETE FROM orders WHERE order_id = $1 returning *', [order_id])
}


module.exports = {
  getOrders,
  getOrdersById,
  createOrders,
  updateOrders,
  deleteOrders
}