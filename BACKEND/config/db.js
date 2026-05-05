const mongoose = require('mongoose')

const dotenv = require('dotenv')
const path = require('path')
dotenv.config({ path: path.resolve(__dirname, '../.env') })

const connectDB = () => {
    mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log(`database is connected... ${process.env.MONGO_URL}`))
    .catch((err) => console.log('database is not connected....', err.message))
}


module.exports = connectDB