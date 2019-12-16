const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const customers=require('./src/routes/customers.js')
const orders = require('./src/routes/orders.js')
const log = require('./src/utils/config.js')

const port = process.env.PORT || 3008

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true,}))

app.use(log.logging)
app.use('/',customers)
app.use('/',orders)
app.use('*',(request,response) => response.send("Invalid URL"))
app.use(log.error)

app.listen(port, () => console.log(`App running on port ${port}.`))
