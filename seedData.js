const { Pool, Client } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "restapi",
  password: "vaishakh@1997",
  port: "5432"
});


//    pool.query(
//   "CREATE TABLE IF NOT EXISTS customers(customer_id SERIAL PRIMARY KEY, name VARCHAR(50), phone VARCHAR(10),email VARCHAR(50), city VARCHAR(50), pincode INT)",
//   (err, res) => {
//     console.log(err, res);
//   })


// pool.query(
//   "COPY customers(name, phone, email, city, pincode) FROM '/home/vaishakh/rest/data/customers.csv' DELIMITER ',' CSV HEADER;",
//     (err, res) => {
//       console.log(err, res);
//     }
//   );



// pool.query(
//   "CREATE TABLE IF NOT EXISTS orders(order_id SERIAL PRIMARY KEY, customer_id INT, order_status VARCHAR(50), order_type VARCHAR(50), amount INT, FOREIGN KEY(customer_id) REFERENCES customers(customer_id) ON DELETE CASCADE )",
//   (err, res) => {
//     console.log(err, res);
//   })


// pool.query(
//   "COPY orders(customer_id, order_status, order_type, amount) FROM '/home/vaishakh/rest/data/orders.csv' DELIMITER ',' CSV HEADER;",
//     (err, res) => {
//       console.log(err, res);
//     }
//   );


module.exports= pool;
