const express = require('express')
const dotEnv = require('dotenv')
const routerUser = require('./routes/userRoutes')
const routerP = require('./routes/productRoute')
const routerOrder = require('./routes/orderRoutes')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
app.use(cors())
dotEnv.config()
app.use(bodyParser.json())

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 6006

//middleware
app.use('/user',routerUser)
app.use('/product', routerP)
app.use('order/',routerOrder)
//database connection
mongoose.connect(process.env.DB_URI)
.then(()=>{
    console.log("bd connected")
})
.catch((err)=>{
    console.log(`db error: ${err}`)
})

//server
app.listen(PORT, ()=>{
    console.log(`server connected at ${PORT}`)
})