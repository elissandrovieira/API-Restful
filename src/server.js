const express = require('express')
const path = require('path')

//const db = require('./database')
const routes = require('./routes')

const app = express()

//database conection
//db.connect()

//enable server to receive data by post (form)
app.use(express.urlencoded({ extended: true }))

//set routes
app.use('/api', routes)

//running server
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))