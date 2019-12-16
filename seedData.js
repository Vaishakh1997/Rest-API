const { Pool, Client } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "restapi",
  password: "vaishakh@1997",
  port: "5432"
});

async function createCustomersTable(){
   pool.query(
  "CREATE TABLE IF NOT EXISTS customers(customer_id SERIAL PRIMARY KEY, name VARCHAR(50), phone VARCHAR(10),email VARCHAR(50), city VARCHAR(50), pincode INT)",
  (err, res) => {
    console.log(err, res);
  })
}

async function insertToCustomersTable(){
pool.query(
  "COPY customers(name, phone, email, city, pincode) FROM '/home/vaishakh/rest/data/customers.csv' DELIMITER ',' CSV HEADER;",
    (err, res) => {
      console.log(err, res);
    });
}

async function createOrdersTable(){
pool.query(
  "CREATE TABLE IF NOT EXISTS orders(order_id SERIAL PRIMARY KEY, customer_id INT, order_status VARCHAR(50), order_type VARCHAR(50), amount INT, FOREIGN KEY(customer_id) REFERENCES customers(customer_id) ON DELETE CASCADE )",
  (err, res) => {
    console.log(err, res);
  })
}

async function insertToOrdersTable(){
pool.query(
  "COPY orders(customer_id, order_status, order_type, amount) FROM '/home/vaishakh/rest/data/orders.csv' DELIMITER ',' CSV HEADER;",
  (err, res) => {
    console.log(err, res);
  });
}

async function createUsersTable(){
pool.query(
  "CREATE TABLE IF NOT EXISTS users(name VARCHAR(50), email VARCHAR(50) PRIMARY KEY, password VARCHAR(500))",
  (err, res) => {
    console.log(err, res);
  })
}

// createCustomersTable();
// insertToCustomersTable();
// createOrdersTable();
// insertToOrdersTable();
// createUsersTable();


module.exports= pool;
