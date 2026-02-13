require('dotenv').config()

const express = require('express')

const bodyParser = require('body-parser')

const cors = require('cors')

const db = require('./db')

const userRoute = require('./routes/usersapi')

const app = express()

app.use(bodyParser.json())

app.use(cors())

app.use('/api/user',userRoute)

const port = process.env.PORT

app.get('/',(req,res)=>{
    res.send("Hello world from server")
})

app.listen(port,()=>{
    console.log(`Server is started on :http://localhost:${port}`);
})




// const express = require('express');

// const bodyParser = require('body-parser')
// const cors = require('cors')

// const app = express()
// app.use(bodyParser.json())
// app.use(cors())

// const port = process.env.PORT || 5000

// app.listen(port,()=>{
//     console.log(`server is started on :http://localhost:${port}`);
// })

// app.get('/',(req,res)=>{
//     res.json("hello every one")
// })
