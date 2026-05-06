const connectDB = require("./config/db")
connectDB()

const express = require('express')
const app = express()

app.use(express.json({ limit : '50mb' }))

const cors = require('cors')
app.use(cors({
    origin: "https://royalkitchendot.netlify.app",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}))

const productRouter = require("./routers/productRouter");
app.use('/product',productRouter)

const userRouter = require("./routers/userRouter")
app.use('/user',userRouter)

const dotenv = require('dotenv')
const path = require('path')
dotenv.config({ path: path.resolve(__dirname, '.env') })

app.listen(process.env.PORT,() => {
    console.log('server Running Successfully....')
})
