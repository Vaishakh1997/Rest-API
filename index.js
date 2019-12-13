const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const customers=require('./src/routes/customers.js')
const port = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true,}))

app.use('/',customers)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})
