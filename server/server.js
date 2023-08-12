const express = require('express')
const app = express()
require("dotenv").config()
const dbConnect = require('./config/dbconnect')
const initRoutes = require('./routes')

const port = process.env.PORT || 8000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

dbConnect()
initRoutes(app)

app.use('/', (req, res) => {
    res.send('SERVER ON')
})



app.listen(port, () => {
    console.log('Server running on the port:' + port)
})