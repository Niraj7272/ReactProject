require('dotenv').config()


const mongoose = require('mongoose')

// mongoose.connect("mongodb://localhost:27017/eshop")
mongoose.connect(process.env.DB_URL)

mongoose.connection.on('connected',()=>{
    console.log("Connected to MongoDB");
})

mongoose.connection.on('error',(error)=>{
    console.error("Error is ",error)
})

module.exports = mongoose;