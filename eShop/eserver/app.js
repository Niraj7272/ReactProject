require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./db')

//All Routers
const adminLoginRoute = require('./routes/Admin/adminLogin')


const app = express()
app.use(bodyParser.json())
app.use(cors())

//All Routes api
app.use('/adminLoginapi',adminLoginRoute)


const port = process.env.PORT

app.get('/',(req,res)=>{
    res.send("hello world")
})

app.listen(port,()=>{
    console.log(`Server is running on: http://localhost:${port}`);
})