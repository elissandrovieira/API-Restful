const express = require('express')
const path = require('path')

const db = require('./database/db')
const routes = require('./routes/routes')

const app = express()

//database conection
db.connect()

//enable server to receive json data
app.use(express.json())

//set routes
app.use('/api', routes)

//running server
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))