require('dotenv').config()

const mongoose = require('mongoose')  //initialise mongoose with variable
const dburi = process.env.DB_URI
mongoose.connect(dburi)  //connect mongoose with database name as blog_mern


mongoose.connection.on('connected',()=>{    //if connect to database successful the success message generate
console.log('connected to MongoDB');
})

mongoose.connection.on('error',(err)=>{    //if connect to database error then this message generate
console.error('connection error: ',err);
})

module.exports = mongoose