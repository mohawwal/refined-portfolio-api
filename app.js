const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors());
app.use(express.json({limit: '50mb'}))
app.use(express.urlencoded({extended: true, limit: '50mb'}))

app.use(express.json());

//import route
const contactRouter = require('./routes/mail')
app.use('/', contactRouter)

const apiRouter = require('./routes/apiKey')
app.use('/', apiRouter)

module.exports = app