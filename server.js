const app = require('./app')
const dotenv = require('dotenv')
const cors = require('cors')


app.use(cors())

dotenv.config()

app.listen(process.env.PORT, () => {
    console.log(`SERVER RUNNING IN PORT ${process.env.PORT}`)
})