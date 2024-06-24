const app = require('./app')
const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors');


dotenv.config()

app.use(cors())

app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ limit: "25mb", extended: false })); 


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', "*");
    next();
});



const server = app.listen(process.env.PORT, () => {
    console.log(`Server is listening to port ${process.env.PORT}`)
})

//handle Unhandled Promise Rejections
process.on('unhandledRejection', err => {
    console.log(`Error: ${err.message}`)
    console.log('Shutting Down The Server Due To Unhandled Promise Rejection')
    server.close(() => {
        process.exit(1)
    })
})